import React,{useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
const Post = ()=>{

    const [form,setForm] = useState({title:'',desc:'',image:''})

    const history = useHistory()

    const test = async() =>{      
        try {
            await axios.post('http://localhost:3000/blog/posts/post',{title:form.title,desc:form.desc,image:form.image})
            history.push('/')
        } catch (error) {
            alert(error)
        }      
    } 
    
    return(
        <div className="post">
            <div className="post__content">
            <Link to="/">
            <button className="back">
                <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.419016 6.64373L0.420301 6.64258L7.88487 0.352254C8.44408 -0.118976 9.34858 -0.117222 9.90523 0.356367C10.4618 0.829895 10.4597 1.5958 9.90044 2.06709L4.88873 6.29032H22.5714C23.3604 6.29032 24 6.8319 24 7.5C24 8.16811 23.3604 8.70968 22.5714 8.70968H4.8888L9.90037 12.9329C10.4596 13.4042 10.4617 14.1701 9.90516 14.6436C9.34851 15.1173 8.44394 15.1189 7.8848 14.6477L0.420231 8.35742L0.418943 8.35627C-0.140556 7.88341 -0.138769 7.11502 0.419016 6.64373Z" fill="#3260A1"/>
                </svg>
                Назад
            </button>
            </Link>
                <div className="post__conteiner">
                    <form className="post__form">                     
                        <label htmlFor="">
                            <span>Название статьи:</span>
                            <input type="text" onChange={e =>setForm({...form,title:e.target.value})}/>
                        </label>
                        <label htmlFor="">
                            <span>Текст статьи:</span>
                            <textarea onChange={e =>setForm({...form,desc:e.target.value})}></textarea>
                        </label>
                        
                        <label htmlFor="">
                            <span>URL картинки:</span>
                            <input type="text" onChange={e =>setForm({...form,image:e.target.value})}/>
                        </label>         
                    </form>
                    <button className="btn__form"onClick={()=> test()} >
                            Добавить
                    </button>
                </div>   
            </div>      
        </div>
    )
}
export default Post;