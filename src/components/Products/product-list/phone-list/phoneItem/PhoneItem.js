import React from "react";

function PhoneItem(props) {
  // console.log(props.array);
  return (
    <li  className="phone-item">
      <img src={props.array.image.url} alt="logo" />
      <h5>{props.array.name}</h5>
      <p>{props.array.price.formatted_with_symbol}</p>
  </li>
  );
}

export default PhoneItem;
