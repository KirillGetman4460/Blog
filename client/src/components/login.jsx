import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import { useDispatch} from 'react-redux'

const Login = ()=>{

    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm();
 
    const loginUser = async(data)=>{
        try {
            await axios.post('http://localhost:3000/auth/login',{name:data.name,password:data.password})
                .then(res => dispatch({ type:"set_user", payload:res.data }))
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className="login">
            <h1 className="login__title">
                Вход
            </h1>
            <form className="login__form" id="hook-form" onSubmit={handleSubmit(loginUser)}>
                <label className="login__form__label">
                    <input className={errors.name?.type === 'required' ? "errors__active":null} placeholder="Имя пользователя" {...register("name",{
                        required: true            
                    })} />
                    {errors.name?.type === 'required' && <span className="error__message">Имя пользователя обязательное</span>} 
                </label>
                <label className="login__form__label">
                    <input className={errors.name?.type === 'required' ? "errors__active":null} type="password" placeholder="Пароль" {...register("password",{
                        required: true  
                    })} />
                    {errors.name?.type === 'required' && <span className="error__message">Пароль обязательный</span>} 
                </label>
                <span className="forget__password">Забыли пароль?</span>    
                <button type="submit" form="hook-form" className="login__btn__submit">
                    Войти
                </button>
            </form>
        </div>
    )
}
export default Login;