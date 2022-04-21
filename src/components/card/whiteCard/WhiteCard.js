import React from 'react'

const WhiteCard = React.memo((props) =>{
  return (
    <div className={props.classname}>
        <div className="text">
            <h3>
                {props.title}
                <br/>
                {props.titleSecond}
                <br/>
                {props.titleThird}
            </h3>
            <p className="text-price">
                {props.price}
                <span>{props.priceText}</span>
            </p>
            <p className="buy-btn">Indi alın</p>
        </div>
        <img className="first-image" src={props.image} alt="logo"/>
        {props.imageSecond && 
          <img className="second-image" src={props.imageSecond} alt="logo"/>
        }
    </div>
  )
})

export default WhiteCard