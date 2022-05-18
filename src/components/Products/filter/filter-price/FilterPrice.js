import React, { useState, useEffect } from "react";
import PlusIcon from "../../../../assets/images/Iconplus.svg";
import MinusIcon from "../../../../assets/images/IconMinus.svg";
import { useDispatch, useSelector } from "react-redux";
import { filterPrice } from "../../../../Reducer/ProductReducer";
import ManatSymbol from "../../../../assets/images/manat.png"
import {useParams} from 'react-router-dom'

const FilterCategory=()=> {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  function plusBtn() {
    !active ? setActive(true) : setActive(false);
  }

  let {id} = useParams()
  useEffect(()=>{
    document.querySelectorAll(".price-input").forEach((item)=>{
      item.value=""
    })
  },[id])

  return (
    <div className="brend">
      <div className="brend-title">
        <h5>Qiymət</h5>
        <img
          onClick={plusBtn}
          src={!active ?PlusIcon : MinusIcon}
          alt="logo"
        />
      </div>
      <div className={!active ? "brend-text" : "brend-text active-price"}>
        <form 
        onSubmit={(e)=> {
            e.preventDefault()
            let min = e.target[0].value===""?0:e.target[0].value
            let max = e.target[1].value===""?9999999:e.target[1].value

            const obj = {
                minPrice: min,
                maxPrice: max
            }
            dispatch(filterPrice(obj))
        }} 
        className="price-form">
            <div>
                <input className="min-price price-input" type="number" placeholder="Ən az"/>
                <img src={ManatSymbol} alt="logo"/>
            </div>
            <div>
                <input className="max-price price-input" type="number" placeholder="Ən çox"/>
                <img src={ManatSymbol} alt="logo"/>
            </div>
            <button type="submit"></button>
        </form>
      </div>
    </div>
  );
}

export default FilterCategory;
