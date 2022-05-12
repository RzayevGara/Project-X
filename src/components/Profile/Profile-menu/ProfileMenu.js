import React from 'react'
import {Link} from "react-router-dom"
import BasketImage from '../../../assets/images/profile-basket.svg'
import FavoritImage from '../../../assets/images/profile-fav.svg'
import UserImage from '../../../assets/images/profile-user.svg'
import LocationImage from '../../../assets/images/profile-location.svg'
import LogoutImage from '../../../assets/images/profile-logout.svg'


function ProfileMenu() {
  return (
    <div className="profile-menu">
        <p className="profile-title">Profilim</p>
        <Link to="/profil/sifarislerim">
            <img src={BasketImage} alt="logo"/>
            <p>Sifarişlərim</p>
        </Link>
        <Link to="/profil/favorilerim">
            <img src={FavoritImage} alt="logo"/>
            <p>Favorilərim</p>
        </Link>
        <Link to="/profil/melumatlarim">
            <img src={UserImage} alt="logo"/>
            <p>Şəxsi məlumatlar</p>
        </Link>
        <Link to="">
            <img src={LocationImage} alt="logo"/>
            <p>Çatdırılma ünvanı</p>
        </Link>
        <Link to="">
            <img src={LogoutImage} alt="logo"/>
            <p>Çıxış</p>
        </Link>
    </div>
  )
}

export default ProfileMenu