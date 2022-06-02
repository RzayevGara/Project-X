import React, {useEffect, useState} from "react";
import './signup.sass'
import Image from '../assets/images/login-new-img.svg'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useNavigate } from 'react-router-dom'
import {setSignStatus} from '../Reducer/LoginReducer'
import {useDispatch, useSelector} from 'react-redux'

import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

function Signup() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    const addCustomer = async (e)=>{
        const url = new URL("https://api.chec.io/v1/customers")
        
        const checAPIKey = process.env.REACT_APP_CHECK_SECRET_API_KEY
        let headers = {
            "X-Authorization": checAPIKey,
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        let body = {
            "email": `${e.emailInput}`,
            "phone": `${e.phoneInput}`,
            "firstname": `${e.nameInput}`,
            "lastname": `${e.lnameInput}`,
            "external_id": null
        }
        let customer = await axios.post(url, body, {
            headers: headers
        })
        dispatch(setSignStatus(customer.status))
    }

    const signForm = (e)=>{
        addCustomer(e)
        navigate("/qeydiyyatdan-kec/hesab-yaradilir", { replace: true })

    }
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
          signForm(data)
      }

  return (
    <div className="signup">
         <div className="container">
            <form onSubmit={
                handleSubmit(onSubmit)
            }>
                <p className="signup-title">Qeydiyyat</p>

                <label htmlFor="fname">Ad</label>
                <input placeholder="Adınızı daxil edin"
                    {...register("nameInput", {
                    required: "Adınızı daxil edin.",
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name="nameInput"
                    render={({ message }) => <p className="error-message">{message}</p>}
                />

                <label htmlFor="lname">Soyad</label>
                <input placeholder="Soyadınızı daxil edin"
                    {...register("lnameInput", {
                    required: "Soyadınızı daxil edin.",
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name="lnameInput"
                    render={({ message }) => <p className="error-message">{message}</p>}
                />

                <label htmlFor="phone">Mobil nömrə</label>
                <input placeholder="Mobil nömrənizi daxil edin"
                    {...register("phoneInput", {
                    required: "Mobil nömrənizi daxil edin.",
                    pattern: {
                        value: /\d+/,
                        message: "Yalnız rəqəm daxil edin."
                    },
                    minLength: {
                        value: 10,
                        message: "Minimum 10 simvol olmalıdır."
                    },
                    })}
                />
                <ErrorMessage
                    errors={errors}
                    name="phoneInput"
                    render={({ messages }) => {
                    return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p className="error-message" key={type}>{message}</p>
                        ))
                        : null;
                    }}
                />


                
                <label htmlFor="email">E-mail</label>
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


                <div className="checkbox-div">
                    <div>
                        <input 

                        {...register("checkbox", {
                            required: "Əgər istifadəçi şərtləri ilə razısınızsa bu xana mütləq doldurulmalıdır.",
                        })}

                         type="checkbox" value="A" />
                        <label htmlFor="terms">İstifadəçi şərtləri ilə razıyam</label>
                    </div>
                    <ErrorMessage
                        errors={errors}
                        name="checkbox"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <button type="submit">Daxil ol</button>
            </form>
            <div className="login-image">
                <img src={Image} alt="logo"/>
                <p>Artıq hesabınız var? <Link to="/daxil-ol">Daxil olun </Link></p>
            </div>
        </div>
    </div>
  );
}

export default Signup;