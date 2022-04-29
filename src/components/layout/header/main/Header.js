import React,{useState, useEffect, useCallback} from 'react'
import Navbar from "../navbar/Navbar"
import Menu from "../navbar-menu/Menu"
import {useDispatch, useSelector} from "react-redux";
// import {HamburgerClick} from '../../../../Reducer/HamburgerReducer'

function Header() {
  const HamburgerStatus = useSelector((state) => state.setHamburger.HamburgerStatus);
  console.log(HamburgerStatus)

  useEffect(() => {
    let body = document.body
    !HamburgerStatus?body.classList.remove('active-body'):body.classList.add('active-body')
  }, [HamburgerStatus])

  return (
      <nav className="header">
        <Navbar/>
        <Menu />
      </nav>
  )
}

export default Header