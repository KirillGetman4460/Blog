import React,{useState,useEffect} from "react";
import axios from "axios";
const ForgetPassword = () =>{
    
    const[email,setEmail] = useState()

    const sendEmail = async() => {
        await axios.post('http://localhost:3000/auth/sentEmail',{email})            
    }

    return(
        <div className="forgetPassword">
            <div className="forgetPassword__title">
                Восстановление пароля
            </div>
            
                <label className="forgetPassword__form__label">
                    <input type="email" className="forgetPassword__form__input" placeholder="Email" onChange={e => setEmail(e.target.value)}/>  
                </label>  
            
                <button className="forgetPassword__form__btn" onClick={() => sendEmail()}>Отправить</button>
          
        </div>
    )
}
export default ForgetPassword;