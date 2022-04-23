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
          src={!active ? MinusIcon : PlusIcon}
          alt="logo"
        />
      </div>
      <div className={!active ? "brend-text" : "brend-text active-brend"}>
        <form>
          {
            props.brendList.map((item, index)=>(
              <div key={index}>
                <Checkbox onClick={(e) => e.target.checked?dispatch(filterString(item)):dispatch(deleteString(item)) } id={item} value={item.toLowerCase()}  color="success" />
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
