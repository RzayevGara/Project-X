import React, { useEffect } from "react";
import { TailSpin } from "react-loading-icons";
import {useSelector} from "react-redux";
import SuccessImage from "../../assets/images/successimage.png"
import ErrorImage from "../../assets/images/errorImage.png"
import {Link} from "react-router-dom"

function CreateAccount() {

    const signStatus  = useSelector((state) => state.login.signStatus)
    if(signStatus===""){
        return (
          <div className="create-account">
              <TailSpin stroke="#00D68F" className="loading" />
              <p>Zəhmət olmasa gözləyin. Hesab yaradılır.</p>
          </div>
        )
    }else if(signStatus===201){
        return (
            <div className="success-sign">
                <div className="container">
                    <img src={SuccessImage} alt="logo"/>
                    <p>Hesabınız uğurla yaradıldı!</p>
                    <Link className="btn-login" to="/daxil-ol">Hesabınıza Daxil Olun</Link>
                </div>
            </div>
          )
    }else{
        return (
            <div className="error-sign">
                <div className="container">
                    <img src={ErrorImage} alt="logo"/>
                    <p>Daxil etdiyiniz məlumatlar səhvdir və ya sistemdə mövcüddur!</p>
                    <Link className="btn-login" to="/qeydiyyatdan-kec">Yenidən cəhd edin</Link>
                </div>
            </div>
          )
    }
}

export default CreateAccount;
