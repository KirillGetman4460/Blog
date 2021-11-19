import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'

const PostList = () =>{

    const dispatch = useDispatch()

    const posts = useSelector(state => state.posts)

    useEffect(() =>{
        dispatch({type:"GET_POSTS"})
    },[])
    return(
        <div className="post__list">             
            {posts.map(post =>
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