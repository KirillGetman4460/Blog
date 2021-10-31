import React,{useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import Avatar from "../image/default-avatar.png"
import axios from "axios"
const Cabinet = () =>{

    const[userInfo,setUser] = useState({});

    const[newAvatar,setNewAvatar] = useState()

    const[avatar,setAvatar] = useState()

    const user = JSON.parse(localStorage.getItem("user"));

    const history = useHistory()

    const sendFile = async() =>{

        const dataFile = new FormData();
        dataFile.append('image',newAvatar)

        await axios.post('http://localhost:3000/auth/upload',dataFile,{
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }
        ).then(res => setAvatar(res.data))   
        console.log(avatar);
    }
  
    useEffect(async()=>{
        try {
            await axios.get('http://localhost:3000/auth/user',{headers: {Authorization:`Bearer ${user.token}`}})
                .then(res => setUser(res.data))           
        } catch (error) {
            console.log(error);
        }  
        
    },[])
    const logoutuUser = () =>{
        localStorage.removeItem('user')
        history.push('/')
        history.go(0)
    }
    useEffect(async()=>{
        try {
            await axios.get('http://localhost:3000/auth/users',{headers: {Authorization:`Bearer ${user.token}`}})
                .then(res => console.log(res.data))           
        } catch (error) {
            console.log(error);
        }  
        
    },[])
    return(
        <div className="cabinet">
           
           <div className="avatar">
               {!avatar ? <img src={`${Avatar}`} alt="" /> : <img src={`${avatar.path}`} alt="" />}
                
           </div>
           <input type="file" onChange={e => setNewAvatar(e.target.files[0])}/>
           <button onClick={() => sendFile()}>Загрузить</button>
        </div>
    )
}
export default Cabinet;