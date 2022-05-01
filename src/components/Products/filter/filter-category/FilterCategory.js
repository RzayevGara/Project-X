import React, { useState } from "react";
import PlusIcon from "../../../../assets/images/Iconplus.svg";
import MinusIcon from "../../../../assets/images/IconMinus.svg";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { deleteString,filterString, filterColor } from "../../../../Reducer/ProductReducer";

const FilterCategory=(props)=> {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  function plusBtn() {
    !active ? setActive(true) : setActive(false);
  }
  // const color = useSelector((state) => state.category.filterColor)
  // console.log(color);

  return (
    <div className="brend">
      <div className="brend-title">
        <h5>{props.brendTitle && props.brendTitle}{props.colorTitle && props.colorTitle}</h5>
        <img
          onClick={plusBtn}
          src={!active ?PlusIcon : MinusIcon}
          alt="logo"
        />
      </div>
      <div className={!active ? "brend-text" : "brend-text active-brend"}>
        <form>
          {props.brendList &&
            props.brendList.map((item, index)=>(
              <div key={index}>
                <Checkbox onClick={(e) => e.target.checked?dispatch(filterString(item)):dispatch(deleteString(item)) } id={item} value={item.toLowerCase()}  color="success" />
                <label htmlFor={item}>{item}</label>
              </div>
            ))
          }
          {props.colorList &&
            props.colorList.map((item, index)=>(
              <div key={index}>
                <Checkbox onClick={(e) => e.target.checked?dispatch(filterColor(item)):dispatch(deleteString(item)) } id={item} value={item.toLowerCase()}  color="success" />
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
