import React from 'react'
import LogoProject from '../../../../assets/images/Project X.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


const Navbar = React.memo((props)=> {
  return (
    <div className="navbar">
      <div className="left-section">
        <div onClick={props.hamburger} className={props.active ? "hamburger x-button" : "hamburger"}>
          <div className={props.active ? "line first-line" : "line"}></div>
          <div className={props.active ? "line second-line" : "line"}></div>
          <div className={props.active ? "line third-line" : "line"}></div>
        </div>
        <img className="logo-project" src={LogoProject} alt="ProjectLogo"/>
      </div>
      <div className="middle-section">
        <FontAwesomeIcon icon={ faMagnifyingGlass } />
        <form className="search-form">
            <input placeholder="Axtarış..."/>
        </form>
      </div>
      <div className="right-section">
        <div className="header-icon">
          <FontAwesomeIcon className="icon" icon={faUser}/>
          <FontAwesomeIcon className="icon" icon={faHeart}/>
          <FontAwesomeIcon className="icon" icon={faCartShopping}/>
        </div>
      </div>
    </div>
  )
})

export default Navbar