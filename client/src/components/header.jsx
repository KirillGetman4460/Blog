import React from "react";
import {Link} from "react-router-dom";
const Header = () =>{
   
    return (
        <div className="header">
            <div className="header__conteiner">
                <Link to="/" className="header__title">REACT | BLOG</Link>          
                <Link to="/post">
                    <div className="header__link">Добавить статью</div>
                </Link> 
                <Link to="/auth" className="account">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 0C6.82 0 3.82 3 3.82 6.68c0 2.29 1.16 4.31 2.92 5.52A9.534 9.534 0 00.95 21h1.91c0-4.26 3.37-7.64 7.64-7.64s7.64 3.37 7.64 7.64h1.91c0-3.95-2.37-7.35-5.79-8.8a6.68 6.68 0 002.92-5.52C17.18 3 14.18 0 10.5 0zm0 1.91c2.65 0 4.77 2.13 4.77 4.77s-2.13 4.77-4.77 4.77-4.77-2.12-4.77-4.77 2.12-4.77 4.77-4.77z"></path>
                    </svg>
                </Link>                       
            </div>
        </div>
    )
}
export default Header;