import {Outlet} from "react-router-dom"
import Header from "../header/main/Header"

import React from 'react'

function Layout() {
  return (
    <div className="layout">
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout