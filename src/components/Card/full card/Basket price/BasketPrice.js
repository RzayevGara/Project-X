import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import commerce from "../../../../lib/Commerce";
import { setLiveObject } from "../../../../Reducer/CheckoutReducer";
import { TailSpin  } from 'react-loading-icons'

function BasketPrice(props) {
  const dispatch = useDispatch();

  const BasketList = useSelector((state) => state.listOrder.SimpleList);

  const cartToken = useSelector((state) => state.checkout.cartToken);

  const [promoCheck, setPromoCheck] = useState(false)


  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    let maxY =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollPercent = (maxY * 21) / 100;
    let scrollPercentRounded = Math.round(scrollPercent);
    let final = maxY - scrollPercentRounded;
    if (window.scrollY > final) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const promoCode = (e) => {
    e.preventDefault();
    setPromoCheck(true)
    commerce.checkout
      .checkDiscount(cartToken, {
        code: `${e.target[0].value}`,
      })
      .then((response) => {
        if(response.valid===false){
          props.error()
          setPromoCheck(false)
          console.log("error")
        }else{
          props.success()
          setPromoCheck(false)
          dispatch(setLiveObject(response.live));
          document.querySelector(".form-discount_input").disabled=true
          document.querySelector(".form-discount_button").disabled=true
          document.querySelector(".form-discount_button").style.cursor="default"
        }
      });
  };

  const liveObject = useSelector((state) => state.checkout.checkoutLiveObject);

  return (
    <div className={props.checkoutBtn?
      show ? "basket-price basket-price_checkout hideBox" : "basket-price basket-price_checkout": 
      show ? "basket-price hideBox" : "basket-price"}>
      <div className="price-detail">
        <h6>Ümumi</h6>
        {props.checkoutPromo && (
          <p>
            Məbləğ
            <span>
              {liveObject && liveObject.subtotal.formatted_with_symbol}
            </span>
          </p>
        )}
        {props.checkoutPromo && (
          <p>
            Promo kod
            {liveObject && 
            liveObject.discount.length==0?
              <span>0.00</span>
             : 
              <span>
                {liveObject && "-"+ liveObject.discount.amount_saved.formatted_with_symbol}
              </span>
            }
          </p>
        )}

        <h5>
          Cəmi
          {props.checkoutBtn && (
            <span>
              {BasketList && BasketList.subtotal.formatted_with_symbol}
            </span>
          )}
          {props.checkoutPromo && (
            <span>{liveObject && liveObject.total.formatted_with_symbol}</span>
          )}
        </h5>
      </div>
      {props.checkoutPromo && (
        <form onSubmit={promoCode} className="form-discount">
            {promoCheck && 
            <div className="black-page_discount">
              <TailSpin  stroke="#00D68F" className="loading"/>
            </div>
            }
          <input className="form-discount_input" placeholder="Endirim kodunuzu daxil edin." required/>
          <button disabled={false} className="form-discount_button" type="submit">Təsdiqlə</button>
        </form>
      )}
      {props.checkoutBtn && (
        <Link className="btn-confirm" to="/sifarisleri-tesdiqle">
          <div className="confirm-orders">Sifarişləri təsdiqlə</div>
        </Link>
      )}
    </div>
  );
}

export default BasketPrice;
