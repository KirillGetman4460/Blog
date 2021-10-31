import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";
const PagePost = ()=>{
    
    const[post,setPost] = useState([])

    const {id} = useParams();

    const history = useHistory()

    const deletePost = async()=>{
        try {            
            await axios.post('http://localhost:3000/blog/posts/remove',{id})
        } catch (error) {
            console.log(error);
        } 
    }

    useEffect(async()=>{
        await axios.get(`http://localhost:3000/blog/posts/post/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))           
    },[])

    return(
        <div className="page__post">
            
            <div className="page__post__conteiner">
                <div className="page__post__text-content">
                    <div className="page__post__title">
                        {post.title}
                    </div>
                    <div className="page__post__text">
                        {post.desc}
                    </div>
                </div>
                <div className="page__post__image">
                    <img src={`${post.image}`} alt="" />
                </div>
                <Link to="/">
                    <button className="btn__delete__post" onClick={()=> deletePost()}> Удалить статью </button>
                </Link>
                <Link to="/">
            <button className="back__btn">
                <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.419016 6.64373L0.420301 6.64258L7.88487 0.352254C8.44408 -0.118976 9.34858 -0.117222 9.90523 0.356367C10.4618 0.829895 10.4597 1.5958 9.90044 2.06709L4.88873 6.29032H22.5714C23.3604 6.29032 24 6.8319 24 7.5C24 8.16811 23.3604 8.70968 22.5714 8.70968H4.8888L9.90037 12.9329C10.4596 13.4042 10.4617 14.1701 9.90516 14.6436C9.34851 15.1173 8.44394 15.1189 7.8848 14.6477L0.420231 8.35742L0.418943 8.35627C-0.140556 7.88341 -0.138769 7.11502 0.419016 6.64373Z" fill="#3260A1"/>
                </svg>
                Назад
            </button>
            </Link>
            </div>
        </div>
    )
}
export default PagePost;