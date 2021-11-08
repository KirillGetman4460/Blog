import React,{useState} from "react";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import axios from "axios"

const Register = ()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [message,setMessage] = useState();
    const [successful,setSuccessful] = useState(false)

    const registerUser = async(data)=>{
        try {
            await axios.post('http://localhost:3000/auth/register',{name:data.name,email:data.email,password:data.password})
                .then(res => {
                    setMessage(res.data.message)
                    setSuccessful(true)             
                })
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className="register">
            <h1 className="register__title">
                Регистрация
            </h1>
           <form className="login__form" id="hook-form" onSubmit={handleSubmit(registerUser)} type="upload">
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
                <label className="login__form__label">
                    <input className={errors.name?.type === 'required' ? "errors__active":null} placeholder="Email" {...register("email",{
                        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        required: true  
                    })} />
                    {errors.name?.type === 'required' && <span className="error__message">Email обязательный</span>} 
                </label>   
                <button type="submit" form="hook-form" className="login__btn__submit">
                    зарегистрироваться
                </button>          
            </form>   
            {successful ? <div className="successful-registration">
                <div className="successful-registration__conteiner">
                    <div className="successful-registration__content"> 
                    <div className="successful-registration__icon" >
                        <svg fill="none"  stroke="currentColor" class="w-6 h-6 text-green-500" height="2rem" width="2rem" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M5 13l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>  
                    </div>                
                        <div className="successful-registration__content-text">
                            <div className="successful-registration__title">
                                Success!
                            </div>
                            <div className="successful-registration__message">
                                {message}
                            </div>
                        
                        </div>                 
                    </div>
                    <div className="successful-registration__btn">
                            <Link to="/auth">Ок</Link>
                        </div>
                    <div className="successful-registration__bnt__close">
                    <svg fill="none" stroke="currentColor" class="w-6 h-6" height="1.2em" width="1.2em" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M6 18L18 6M6 6l12 12"  onClick={() => setSuccessful(false)} stroke-width="2" stroke-linecap="round" ></path>
                        </svg>
                    </div>
                </div>
            </div>  : null}
               
        </div>
    )
}
export default Register;