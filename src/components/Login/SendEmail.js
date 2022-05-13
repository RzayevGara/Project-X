import React from "react";
import { TailSpin } from "react-loading-icons";
import {useSelector} from "react-redux";
import MailImage from "../../assets/images/undraw_Mail_sent_re_0ofv (1) 1.svg"


function CreateAccount() {
    const loginStatus  = useSelector((state) => state.login.loginStatus)
    console.log(loginStatus)
    if(loginStatus===""){
        return (
          <div className="check-login-account">
              <TailSpin stroke="#00D68F" className="loading" />
              <p>Zəhmət olmasa gözləyin. 
                  <br/>
                  Məlumat yoxlanılır!</p>
          </div>
        )
    }else if(loginStatus===true){
        return (
            <div className="success-login">
                <div className="container">
                    <img src={MailImage} alt="logo" />
                    <p>
                        Zəhmət olmasa email ünvanınızı yoxlayın!
                        <br/>
                        Göndərilmiş linkə keçid edib hesabınıza daxil olun!
                        </p>
                </div>
            </div>
          )
    }
}

export default CreateAccount;
