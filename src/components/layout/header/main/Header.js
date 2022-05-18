import React,{useEffect} from 'react'
import Navbar from "../navbar/Navbar"
import Menu from "../navbar-menu/Menu"
import {useSelector} from "react-redux";

function Header() {
  const HamburgerStatus = useSelector((state) => state.setHamburger.HamburgerStatus);

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