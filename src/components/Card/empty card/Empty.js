import React from 'react'
import EmptyIcon from '../../../assets/images/shopping-cart.svg'
import {Link} from "react-router-dom";

function Empty() {
  return (
    <div className="empty-card">
      <div className="empty-div">
          <img src={EmptyIcon} alt="logo"/>
          <p className={"basket-text"}>Səbətiniz halhazırda boşdur</p>
          <Link to="/">
              <p className={"basket-btn"}>Alış-verişə davam et</p>
          </Link>
      </div>
    </div>
  )
}

export default Empty