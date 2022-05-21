import React from 'react'
import BasketIcon from '../../../assets/images/shopping-cart.svg'

function ProfileOrderEmpty() {
  return (
    <div className="profile-order-empty">
        <img src={BasketIcon} alt="logo"/>
        <p>Səbətinizdə hazırda heç bir sifarişiniz yoxdur</p>
    </div>
  )
}

export default ProfileOrderEmpty