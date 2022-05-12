import React from 'react'
import {Outlet } from 'react-router-dom'
import ProfileMenu from '../components/Profile/Profile-menu/ProfileMenu'
import './profile.sass'


function Profile() {
  return (
    <div className="profile">
       <div className="container">
            <ProfileMenu/>
            <Outlet/>
       </div>
    </div>
  )
}

export default Profile