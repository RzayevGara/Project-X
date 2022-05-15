import React from "react";
import { useSelector } from "react-redux";

function BasketPrice(props) {
  const BasketList = useSelector((state) => state.listOrder.SimpleList);

  return (
    <div className="basket-price">
      <div className="price-detail">
        <h6>Ümumi</h6>
        <p>
          Məbləğ
          <span>{BasketList && BasketList.subtotal.formatted_with_symbol}</span>
        </p>
        <p>
          Çatdırılma
          <span>0.00</span>
        </p>
        <p>
          Hədiyyə paketi
          <span>0.00</span>
        </p>
        <p>
          Promo kod
          <span>0.00</span>
        </p>
        <h5>
          Cəmi
          <span>{BasketList && BasketList.subtotal.formatted_with_symbol}</span>
        </h5>
      </div>
      {props.checkoutBtn && 
        <div className="confirm-orders">
          Sifarişləri təsdiqlə
        </div>
      }
    </div>
  );
}

export default BasketPrice;
