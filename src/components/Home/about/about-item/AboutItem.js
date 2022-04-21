import React from 'react'

function AboutItem(props) {
  return (
    <div className="about-item">
        <img src={props.img} alt={"logo"}/>
        <h5>{props.title}</h5>
        <p>{props.text}</p>
    </div>
  )
}

export default AboutItem