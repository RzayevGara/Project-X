import React,{useState, useEffect, useCallback} from 'react'
import Navbar from "../navbar/Navbar"
import Menu from "../navbar-menu/Menu"

function Header() {
  const[clickHamburger, setHamburger] = useState(false)
  const HandleHamburger = useCallback(()=>{
    !clickHamburger?setHamburger(true):setHamburger(false)
  },[clickHamburger])
  useEffect(() => {
    let body = document.body
    clickHamburger?body.classList.add('active-body'):body.classList.remove('active-body')
  }, [clickHamburger])
  return (
      <nav className="header">
        <Navbar active={clickHamburger} hamburger={HandleHamburger}/>
        <Menu active={clickHamburger}/>
      </nav>
  )
}

export default Header