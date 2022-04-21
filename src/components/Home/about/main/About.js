import React from 'react'
import AboutItem from "../about-item/AboutItem"
import Box from "../../../../assets/images/box.png"
import Card from "../../../../assets/images/card-pos.png"
import Media from "../../../../assets/images/medal-star.png"

function About() {
  return (
    <div className="about">
        <AboutItem img={Box} title={"Çatdırılma"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
        <AboutItem img={Card} title={"Kredit"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
        <AboutItem img={Media} title={"Zəmanət"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
    </div>
  )
}

export default About