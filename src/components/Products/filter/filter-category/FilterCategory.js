import React, { useState } from "react";
import PlusIcon from "../../../../assets/images/Iconplus.svg";
import MinusIcon from "../../../../assets/images/IconMinus.svg";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { deleteString,filterString } from "../../../../Reducer/ProductReducer";
import {useParams} from 'react-router-dom'

const FilterCategory=(props)=> {
let {id} = useParams()
console.log(id)

  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  function plusBtn() {
    !active ? setActive(true) : setActive(false);
  }

  return (
    <div className="brend">
      <div className="brend-title">
        <h5>{id === "butun-telefonlar"? props.brendTitle:props.categoryTitle}</h5>
        <img
          onClick={plusBtn}
          src={!active ?PlusIcon : MinusIcon}
          alt="logo"
        />
      </div>
      <div className={!active ? "brend-text" : "brend-text active-brend"}>
        <form>
          {id === "butun-telefonlar" &&
            props.brendList.map((item, index)=>(
              <div key={index}>
                <Checkbox onClick={(e) => e.target.checked?dispatch(filterString(item)):dispatch(deleteString(item)) } id={item} value={item}  color="success" />
                <label htmlFor={item}>{item}</label>
              </div>
            ))
          }
          {id !== "butun-telefonlar" &&
            props.categoryList.map((item, index)=>(
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
