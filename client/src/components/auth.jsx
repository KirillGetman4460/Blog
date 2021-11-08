import React from 'react'
import {Switch,Route,Link,useRouteMatch} from "react-router-dom";
import Login from "./login.jsx"
import Register from "./register.jsx"

const Auth = ()=>{
    let { path, url } = useRouteMatch();
    
    return(
        <div className="auth">
            <div className="auth__conteiner">
                <ul className="list__auth">                   
                    <Link className="list__auth__link" to={url}>Вход</Link>                                      
                    <Link className="list__auth__link" to={`${url}/register`}>Регистрация</Link>       
                </ul>
                <Switch>
                    <Route exact path={path}>
                        <Login />
                    </Route>
                    <Route path={`${path}/register`}>
                        <Register />
                    </Route>
                   
                    
                </Switch>
            </div>
           
        </div>
    )
}
export default Auth;