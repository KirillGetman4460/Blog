import React,{useState} from "react";
import axios from "axios";
const ChangePassword = () =>{

    const[newPassword, setMewPassword] = useState()

    const changePassword = async() =>{
        await axios.post('http://localhost:3000/auth/change-password',{link}) 
    }

    return(
        <div className="change__password">
            <div className="change__password__conteiner">
                <div className="change__password__content">
                    <label className="change__password__label">
                        <input onChange={e => setMewPassword(e.target.value)} type="password" className="change__password__input" placeholder="Новый пароль"/>
                    </label>
                    <button className="change__password__bnt" onClick={() => changePassword()}>
                        Изменить пароль
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ChangePassword;