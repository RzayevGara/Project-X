import React, {useEffect} from 'react'
import Image from '../assets/images/login-new-img.svg'
import './login.sass'
import {setToken, setEmail} from '../Reducer/LoginReducer'
import {useDispatch, useSelector} from 'react-redux'
import commerce from '../lib/Commerce';
import {Link} from 'react-router-dom'

function Login() {
    const dispatch = useDispatch()
    const myForm = (e)=>{
        e.preventDefault()
        dispatch(setEmail(e.target[0].value))
    }
    const email = useSelector((state) => state.login.email)
    
    useEffect(() =>{
        if(email!==""){
            commerce.customer.login(`${email}`, 'http://localhost:3000/daxil-ol').then((token) => console.log(token));
        }
    }, [email])

  return (
    <div className="login">
        <div className="container">
            <form onSubmit={myForm}>
                <label>E-mail</label>
                <input type="email" placeholder="nümunə@gmail.com"/>
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