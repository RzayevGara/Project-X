import React from 'react'
import Cards from "../card/Cards"
import PhoneImg from "../../../../assets/images/xiaomi-card.png"
import WatchImg from "../../../../assets/images/watch-card.png"
import IphoneImg from "../../../../assets/images/iphone-card.png"

function LinkCard(props) {
  return (
    <div className="link-card">
        <Cards count={props.countPhone} image={PhoneImg} title={"Telefon"} class={"phone-card cards"}/>
        <Cards image={WatchImg} title={"Smart Saat"} class={"watch-card cards"}/>
        <Cards image={IphoneImg} title={"Aksesuar"} class={"iphone-card cards"}/>
    </div>
  )
}

export default LinkCard