import React,{useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
const Register = ()=>{
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [message,setMessage] = useState();

    const registerUser = async(data)=>{
        try {
            await axios.post('http://localhost:3000/auth/register',{name:data.name,email:data.email,password:data.password})
                .then(res => setMessage(res.data))
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
                    Войти
                </button>
            </form> 
           
        </div>
    )
}
export default Register;