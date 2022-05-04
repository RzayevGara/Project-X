import React from 'react'
import WhiteCard from "../whiteCard/WhiteCard"
import AppleAirtag from "../../../../assets/images/apple-airtag.png"
import Airtag from "../../../../assets/images/airtag.png"
import Iphone from "../../../../assets/images/iphone 11.png"


function Card() {
  return (
    <div className="card">
        <WhiteCard classname={"white-card"} title={"Iphone 13."} titleSecond={"Rəngli, Güclü."}  link={"apple/prod_31q0o39jQBlDdj"} titleThird={"Əsl sizə lazım olan."} price={"2 000 AZN"} priceText={"Faizsiz taksitlə 127 AZN-dən"}  image={Iphone}/>
        <WhiteCard classname={"grey-card"} title={"AirTag"} titleSecond={"Əşyalarınızı tapmağın"} link={"apple/prod_bO6J5aBEJElEjp"} titleThird={"super asan yolu."} price={"109 "} priceText={"AZN-dən*"} image={AppleAirtag} imageSecond={Airtag}/>
    </div>
  )
}

export default Card