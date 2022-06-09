import React, {useEffect} from 'react'
import Image from '../assets/images/login-new-img.svg'
import './login.sass'
import {setLoginStatus, setEmail} from '../Reducer/LoginReducer'
import {useDispatch, useSelector} from 'react-redux'
import commerce from '../lib/Commerce';
import {Link, useNavigate} from 'react-router-dom'

import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { config } from '../Constants'

function Login() {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const url = config.url.API_URL

    useEffect(() => {
        const changePage = () => {
            window.scrollTo({ top: 0 });
          };
          changePage();
    }, [])

    const myForm = async (data)=>{
        dispatch(setEmail(data.emailInput))
    }
    const email = useSelector((state) => state.login.email)
    
    useEffect(() =>{
        if(email!==""){
            navigate("/daxil-ol/hesabiniza-daxil-olunur", { replace: true })
            commerce.customer.login(`${email}`, `${url}`).then((token) => {dispatch(setLoginStatus(token.success))});
        }
    }, [email, dispatch, navigate,url])

    const token  = useSelector((state) => state.login.customerToken)
    useEffect(()=>{
        if(token){
            navigate ("/profil/sifarislerim", { replace: true })
        }
    },[navigate, token])

    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm({
        criteriaMode: "all",
      });
      const onSubmit = (data) =>{
          myForm(data)
      }

  return (
    <div className="login">
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="login-title">Daxil Ol</p>
                <label>E-mail</label>
                <input
                    placeholder="nümunə@gmail.com"
                    {...register("emailInput", {
                        required: "Email ünvanınızı daxil edin.",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Yanlış email ünvanı"
                        }
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name="emailInput"
                    render={({ messages }) => {
                    return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p className="error-message" key={type}>{message}</p>
                        ))
                        : null;
                    }}
                />
                {/* <input type="email" placeholder="nümunə@gmail.com"/> */}
                <button type="submit">Daxil ol</button>
            </form>
            <div className="login-image">
                <img src={Image} alt="logo"/>
                <p>Hesabınız yoxdur? <Link to="/qeydiyyatdan-kec">Qeydiyyatdan keçin</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login