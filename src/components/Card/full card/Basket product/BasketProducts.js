import React, {useState} from "react";
import MinusIcon from "../../../../assets/images/IconMinus.svg";
import PlusIcon from "../../../../assets/images/Iconplus.svg";
import DeleteIcon from "../../../../assets/images/delete.svg";
import commerce from '../../../../lib/Commerce'
import {setSimpleList} from "../../../../Reducer/CardListReducer"
import { useDispatch } from "react-redux";
import { TailSpin  } from 'react-loading-icons'


function BasketProducts(props) {

  const [IsLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  return (
    <div className="basket-products">
      {IsLoading && 
      <div className="black-page">
        <TailSpin  stroke="#00D68F" className="loading"/>
        <p>Zəhmət olmasa gözləyin</p>
      </div>
      }
      <ul className="products">
        {props.list && props.list.line_items.map((item, index) => (
          <li key={index}>
            <div className="logo-text">
              <img className="product-logo" src={item.image.url} alt="logo" />
              <div className="product-text">
                <h3 className="product-basket_title">{item.name}</h3>
                <p className="product-basket_detail">
                  {
                    item.selected_options &&
                    item.selected_options.map((item, indexx) =>(
                      <span key={indexx}>
                        {item.group_name}{": "}
                        <span className="bold-text">{item.option_name}</span>
                      </span>
                    ))
                  }
                  <span>
                    Qiymət: <span className="bold-text">{item.line_total.formatted_with_symbol}</span>
                  </span>
                </p>
              </div>
            </div>
            <div className="item-quantity-basket">
              <div onClick={() =>{setIsLoading(true) ;commerce.cart.update(`${item.id}`, { quantity: item.quantity-1 }).then((response) => {dispatch(setSimpleList(response.cart)); setIsLoading(false)})}} className="icon">
                <img src={MinusIcon} alt="logo" />
              </div>
              <p>{item.quantity}</p>
              <div onClick={() =>{setIsLoading(true); commerce.cart.update(`${item.id}`, { quantity: item.quantity+1 }).then((response) => {dispatch(setSimpleList(response.cart)); setIsLoading(false)})}} className="icon">
                <img src={PlusIcon} alt="logo" />
              </div>
            </div>
            <img onClick={()=>{setIsLoading(true);commerce.cart.remove(`${item.id}`).then((response) => {dispatch(setSimpleList(response.cart)); setIsLoading(false)})}} className="delete-icon" src={DeleteIcon} alt="logo" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BasketProducts;
