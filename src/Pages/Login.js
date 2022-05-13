import React, {useEffect} from 'react'
import Image from '../assets/images/login-new-img.svg'
import './login.sass'
import {setLoginStatus, setEmail} from '../Reducer/LoginReducer'
import {useDispatch, useSelector} from 'react-redux'
import commerce from '../lib/Commerce';
import {Link, useNavigate} from 'react-router-dom'

function Login() {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const myForm = async (e)=>{
        e.preventDefault()
        dispatch(setEmail(e.target[0].value))
    }
    const email = useSelector((state) => state.login.email)
    
    useEffect(() =>{
        if(email!==""){
            navigate("/daxil-ol/hesabiniza-daxil-olunur", { replace: true })
            commerce.customer.login(`${email}`, 'http://localhost:3000/daxil-ol').then((token) => {dispatch(setLoginStatus(token.success)); console.log(token.success)});
        }
    }, [email, dispatch, navigate])

    const token  = useSelector((state) => state.login.customerToken)
    useEffect(()=>{
        if(token){
            navigate ("/profil/sifarislerim", { replace: true })
        }
    },[navigate, token])

  return (
    <div className="login">
        <div className="container">
            <form onSubmit={myForm}>
                <p>Daxil Ol</p>
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