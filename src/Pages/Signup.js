import React, { useEffect } from "react";
import './signup.sass'
import Image from '../assets/images/login-new-img.svg'
import axios from 'axios'

function Signup() {

    
    const url = new URL("https://api.chec.io/v1/customers")
    
    
    let headers = {
        "X-Authorization": "sk_4218961a06ff33e7f869402a4745e5483bcf12e3295fa",
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    // const checAPIKey = process.env.REACT_APP_CHECK_SECRET_API_KEY
    const signForm = async (e)=>{
        e.preventDefault();
        

        let body = {
            "email": `${e.target[2].value}`,
            "phone": "+1 987 654 3210",
            "firstname": `${e.target[0].value}`,
            "lastname": `${e.target[1].value}`,
            "external_id": "MY_CRM_USER_123"
            // "email": "qaraaaaa@example.com",
            // "phone": "+1 987 654 3210",
            // "firstname": "Leslie",
            // "lastname": "Lawless",
            // "external_id": "MY_CRM_USER_123"
        }

        
        let a = await axios.post(url, body, {
            headers: headers
        })

        console.log(a)
        console.log(body)
    }
    

  return (
    <div className="signup">
         <div className="container">
            <form onSubmit={signForm}>
                <p>Qeydiyyat</p>
                <label htmlFor="fname">Ad</label>
                <input placeholder="Adınızı daxil edin" id="fname" type="text"/>
                <label htmlFor="lname">Soyad</label>
                <input placeholder="Soyadınızı daxil edin" id="lname" type="text"/>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="nümunə@gmail.com"/>
                <button type="submit">Daxil ol</button>
            </form>
            <div className="login-image">
                <img src={Image} alt="logo"/>
            </div>
        </div>
    </div>
  );
}

export default Signup;