import React from "react";
import {Link} from "react-router-dom";
const Header = () =>{
   const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="header">
            <div className="header__conteiner">
                <Link to="/" className="header__title">REACT | BLOG</Link>          
                <Link to="/post">
                    <div className="header__link">Добавить статью</div>
                </Link> 
                {!user ? <Link to="/auth" className="header__sing">sing</Link>:<Link to="/cabinet" className="header__sing">cabinet</Link>}                          
            </div>
        </div>
    )
}
export default Header;