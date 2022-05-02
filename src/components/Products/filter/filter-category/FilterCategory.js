import React, { useState } from "react";
import PlusIcon from "../../../../assets/images/Iconplus.svg";
import MinusIcon from "../../../../assets/images/IconMinus.svg";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { deleteString,filterString } from "../../../../Reducer/ProductReducer";

const FilterCategory=(props)=> {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  function plusBtn() {
    !active ? setActive(true) : setActive(false);
  }

  return (
    <div className="brend">
      <div className="brend-title">
        <h5>{props.brendTitle}</h5>
        <img
          onClick={plusBtn}
          src={!active ?PlusIcon : MinusIcon}
          alt="logo"
        />
      </div>
      <div className={!active ? "brend-text" : "brend-text active-brend"}>
        <form onChange={(e)=> e.target.checked?dispatch(filterString(e.target.value)):dispatch(deleteString(e.target.value))}>
          {
            props.brendList.map((item, index)=>(
              <div key={index}>
                <Checkbox id={item} value={item}  color="success" />
                <label htmlFor={item}>{item}</label>
              </div>
            ))
          }
        </form>
      </div>
    </div>
  );
}

export default FilterCategory;
