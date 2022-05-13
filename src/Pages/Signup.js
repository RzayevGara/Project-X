import React, {useEffect} from "react";
import './signup.sass'
import Image from '../assets/images/login-new-img.svg'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useNavigate } from 'react-router-dom'
import {setSignStatus} from '../Reducer/LoginReducer'
import {useDispatch, useSelector} from 'react-redux'

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
            "email": `${e.target[3].value}`,
            "phone": `${e.target[2].value}`?`${e.target[2].value}`:null,
            "firstname": `${e.target[0].value}`,
            "lastname": `${e.target[1].value}`,
            "external_id": null
        }
        let customer = await axios.post(url, body, {
            headers: headers
        })
        dispatch(setSignStatus(customer.status))
    }

    const signForm = (e)=>{
        e.preventDefault();
        addCustomer(e)
        navigate("/qeydiyyatdan-kec/hesab-yaradilir", { replace: true })

    }
    const token  = useSelector((state) => state.login.customerToken)
    useEffect(()=>{
        if(token){
            navigate ("/profil/sifarislerim", { replace: true })
        }
    },[navigate, token])
    

  return (
    <div className="signup">
         <div className="container">
            <form onSubmit={signForm}>
                <p>Qeydiyyat</p>
                <label htmlFor="fname">Ad</label>
                <input placeholder="Adınızı daxil edin" id="fname" type="text" required/>
                <label htmlFor="lname">Soyad</label>
                <input placeholder="Soyadınızı daxil edin" id="lname" type="text" required/>
                <label htmlFor="phone">Mobil nömrə</label>
                <input placeholder="Mobil nömrənizi daxil edin" id="phone" type="number"/>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="nümunə@gmail.com" required/>
                <div>
                    <input id="terms" type="checkbox" required/>
                    <label htmlFor="terms">İstifadəçi şərtləri ilə razıyam</label>
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