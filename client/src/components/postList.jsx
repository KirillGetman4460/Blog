import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
const PostList = () =>{
    
    const[postList,setPostList] = useState([]);

    useEffect(async() =>{

        await axios.get("http://localhost:3000/blog/posts/postlist")
            .then(res => setPostList(res.data))
            .catch(err => console.log(err)) 

    },[])

    return(
        <div className="post__list">
            
            {postList.map(post =>
                <Link to={'/postPage/' + post._id} className="post__list__item">
                   
                        <div className="post__list__item__image" style={{background:`url(${post.image}) 0 0/cover no-repeat`}}></div>
                        <div className="post__list__item__title">
                            {post.title}
                     </div>
                    
                </Link>
            )}
        </div>
    )
}
export default PostList;