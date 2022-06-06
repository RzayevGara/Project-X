import LogoProject from '../../../../assets/images/Project X.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { Link} from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector, useDispatch} from "react-redux";
import {HamburgerClick} from '../../../../Reducer/HamburgerReducer'
import React, {useEffect} from 'react'
import {setCustomerToken, setCustomerInfo} from '../../../../Reducer/LoginReducer'
import commerce from '../../../../lib/Commerce'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Navbar = ()=> {
  const dispatch = useDispatch()
  const HamburgerStatus = useSelector((state) => state.setHamburger.HamburgerStatus);
  
  const basketCount = useSelector((state) => state.listOrder.SimpleList);

  function HamburgerClickFunc(){
    !HamburgerStatus?dispatch(HamburgerClick(true)):dispatch(HamburgerClick(false))
  }
  let tokenLocal = localStorage.getItem('commercejs_customer_token')
  useEffect(() =>{
    dispatch(setCustomerToken(tokenLocal))
    if(tokenLocal){
      commerce.customer.about().then((customer) => dispatch(setCustomerInfo(customer)))
    }
  },[dispatch, tokenLocal])

  const token = useSelector((state) => state.login.customerToken)
  const customerInfo = useSelector((state) => state.login.customerInfo)

  return (
    <div className="navbar">
      <div className="left-section">
        <div onClick={HamburgerClickFunc} className={HamburgerStatus ? "hamburger x-button" : "hamburger"}>
          <div className={HamburgerStatus ? "line first-line" : "line"}></div>
          <div className={HamburgerStatus ? "line second-line" : "line"}></div>
          <div className={HamburgerStatus ? "line third-line" : "line"}></div>
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
          <Link className="user-icon" to={token?"/profil/sifarislerim":"daxil-ol"}>
          {customerInfo && customerInfo.firstname}
          <FontAwesomeIcon className="icon" icon={faUser}/>
          </Link>
          <Link to={`/sebet`}>
            <IconButton className="icon" aria-label="cart">
              <StyledBadge badgeContent={basketCount? basketCount.line_items.length:0} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar