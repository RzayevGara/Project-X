import React from "react";
import { Link } from "react-router-dom";

function PhoneItem(props) {
  console.log(props.array);
  return (
    <Link className="link" to={`/butun-mehsullar/${props.array.id}`}>
      <li className="phone-item">
        <img src={props.array.image.url} alt="logo" />
        <h5>{props.array.name}</h5>
        <p>{props.array.price.formatted_with_symbol}</p>
      </li>
    </Link>
  );
}

export default PhoneItem;
