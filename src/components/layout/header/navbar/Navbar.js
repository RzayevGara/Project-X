import React from 'react'
import LogoProject from '../../../../assets/images/Project X.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link} from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Navbar = React.memo((props)=> {
  return (
    <div className="navbar">
      <div className="left-section">
        <div onClick={props.hamburger} className={props.active ? "hamburger x-button" : "hamburger"}>
          <div className={props.active ? "line first-line" : "line"}></div>
          <div className={props.active ? "line second-line" : "line"}></div>
          <div className={props.active ? "line third-line" : "line"}></div>
        </div>
        <Link to={`/`}>
          <img className="logo-project" src={LogoProject} alt="ProjectLogo"/>
        </Link>
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
          <IconButton className="icon" aria-label="cart">
            <StyledBadge badgeContent={0} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
    </div>
  )
})

export default Navbar