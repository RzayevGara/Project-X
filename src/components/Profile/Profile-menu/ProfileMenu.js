import React from 'react'
import {Link, useParams} from "react-router-dom"
import BasketImage from '../../../assets/images/profile-basket.svg'
import UserImage from '../../../assets/images/profile-user.svg'
import LogoutImage from '../../../assets/images/profile-logout.svg'
import {useSelector} from "react-redux";


function ProfileMenu(props) {

  const profileActive = useSelector((state) => state.customer.profileMenuActive)

  return (
    <div className="profile-menu">
        <p className="profile-title">Profilim</p>
        <Link to="/profil/sifarislerim">
            <img src={BasketImage} alt="logo"/>
            <p className={profileActive==="order"?"activeProfile":null}>Sifarişlərim</p>
        </Link>
        <Link to="/profil/melumatlarim">
            <img src={UserImage} alt="logo"/>
            <p className={profileActive==="info"?"activeProfile":null}>Şəxsi məlumatlar</p>
        </Link>
        <div className="log-out" onClick={props.logOut}>
            <img src={LogoutImage} alt="logo"/>
            <p>Çıxış</p>
        </div>
    </div>
  )
}

export default ProfileMenu