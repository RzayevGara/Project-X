import React, { useState, useEffect } from "react";

function BasketPrice(props) {
  return (
    <div className="basket-price">
      <h6>Ümumi</h6>
      <p>
        Məbləğ
        <span>{props.list && props.list.subtotal.formatted_with_symbol}</span>
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
        <span>{props.list && props.list.subtotal.formatted_with_symbol}</span>
      </h5>
    </div>
  );
}

export default BasketPrice;
