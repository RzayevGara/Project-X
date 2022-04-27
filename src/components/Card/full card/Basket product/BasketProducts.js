import React from 'react'

function BasketProducts(props) {
    console.log(props.list);
  return (
    <div className="basket-products">
        <ul className="products">
        {props.list.map((item, index)=>(
            <li key={index}>
                <img src={item.image.url} alt="logo"/>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default BasketProducts