import React from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import ProfileMenu from '../components/Profile/Profile-menu/ProfileMenu'
import './profile.sass'
import commerce from '../lib/Commerce'


function Profile() {
    const navigate = useNavigate()
    const logOut = () =>{
        document.querySelector(".logout-modal").style.display = "flex"
    }
  return (
    <div className="profile">
       <div className="container">
            <ProfileMenu logOut={logOut}/>
            <Outlet/>
       </div>
       <div className="logout-modal">
            <div className="modal-windows">
                <p>Hesabınızdan çıxmaq istədiyinizə əminsiniz?</p>
                <div className="modal-btns">
                    <button onClick={()=>{document.querySelector(".logout-modal").style.display = "none"}}>Xeyr</button>
                    <button onClick={()=>{
                        commerce.customer.logout()
                        navigate ("/", { replace: true })
                    }}>Bəli</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile