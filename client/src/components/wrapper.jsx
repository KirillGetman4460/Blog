import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Post from "./post.jsx"
import PostList from "./postList.jsx"
import PostPage from "./postPage.jsx"
import Auth from "./auth.jsx"
import Header from "./header.jsx"
import Cabinet from "./cabinet.jsx"
const Wrapper = ()=>{      
    return(
        <div className="wrapper">
            <Router>
            <Header/>
                <Switch>
                    <Route exact path="/">
                        <PostList/>
                    </Route>  
                    <Route path="/auth">
                        <Auth/>
                    </Route> 
                    <Route path="/cabinet">
                        <Cabinet/>
                    </Route> 
                    <Route path="/post">
                        <Post/>
                    </Route>  
                    <Route path="/postPage/:id">
                        <PostPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Wrapper; 