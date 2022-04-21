import React from 'react'
import WhiteCard from "../whiteCard/WhiteCard"
import AppleAirtag from "../../../assets/images/apple-airtag.png"
import Airtag from "../../../assets/images/airtag.png"
import Iphone from "../../../assets/images/iphone 11.png"


function Card() {
  return (
    <div className="card">
        <WhiteCard classname={"white-card"} title={"Iphone 11."} titleSecond={"Rəngli, Güclü."}   titleThird={"Əsl sizə lazım olan."} price={"1 519 AZN"} priceText={"Faizsiz taksitlə 127 AZN-dən"}  image={Iphone}/>
        <WhiteCard classname={"grey-card"} title={"AirTag"} titleSecond={"Əşyalarınızı tapmağın"}  titleThird={"super asan yolu."} price={"79 "} priceText={"AZN-dən*"} image={AppleAirtag} imageSecond={Airtag}/>
    </div>
  )
}

export default Card