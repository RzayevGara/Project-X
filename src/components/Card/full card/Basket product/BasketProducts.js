import React, {useState} from "react";
import MinusIcon from "../../../../assets/images/IconMinus.svg";
import PlusIcon from "../../../../assets/images/Iconplus.svg";
import DeleteIcon from "../../../../assets/images/delete.svg";
import commerce from '../../../../lib/Commerce'
import {setSimpleList} from "../../../../Reducer/CardListReducer"
import { useDispatch } from "react-redux";
import { TailSpin  } from 'react-loading-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BasketProducts(props) {

  const increase = () =>   toast.success('Məhsul sayı artırıldı!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const decrease = () =>   toast.success('Məhsul sayı azaldıldı!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const deleteItem = () =>   
  toast.error('Məhsul səbətdən silindi!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

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
              <div onClick={() =>{setIsLoading(true) ;commerce.cart.update(`${item.id}`, { quantity: item.quantity-1 }).then((response) => {dispatch(setSimpleList(response.cart)); setIsLoading(false);decrease()})}} className="icon">
                <img src={MinusIcon} alt="logo" />
              </div>
              <p>{item.quantity}</p>
              <div onClick={() =>{setIsLoading(true); commerce.cart.update(`${item.id}`, { quantity: item.quantity+1 }).then((response) => {dispatch(setSimpleList(response.cart)); setIsLoading(false); increase()})}} className="icon">
                <img src={PlusIcon} alt="logo" />
              </div>
            </div>
            <img onClick={()=>{setIsLoading(true);commerce.cart.remove(`${item.id}`).then((response) => {
              dispatch(setSimpleList(response.cart)); 
              setIsLoading(false); 
              deleteItem()
            }
              )
            }} 
              className="delete-icon" src={DeleteIcon} alt="logo" />
          </li>
        ))}
      </ul>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default BasketProducts;
