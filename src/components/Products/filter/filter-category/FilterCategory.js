import React, { useState, useEffect } from "react";
import PlusIcon from "../../../../assets/images/Iconplus.svg";
import MinusIcon from "../../../../assets/images/IconMinus.svg";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch , useSelector} from "react-redux";
import { deleteString,filterString , setCategoryList, deleteCategoryList, setStringStatus, setCategoryStatus, setAccessoryStatus, setAccessoryList, deleteAccessoryList, setAccessoryCategory, deleteAccessoryCategory} from "../../../../Reducer/ProductReducer";
import {useParams} from 'react-router-dom'

const FilterCategory=(props)=> {
let {id} = useParams()
console.log(id)

useEffect(()=> {
  if(id==="butun-telefonlar"){
    dispatch(setCategoryStatus(false))
    dispatch(setStringStatus(true))
    dispatch(setAccessoryStatus(false))
  }else if(id==="aksessuarlar"){
    dispatch(setCategoryStatus(false))
    dispatch(setStringStatus(false))
    dispatch(setAccessoryStatus(true))
  }
  else{
    dispatch(setCategoryStatus(true))
    dispatch(setStringStatus(false))
    dispatch(setAccessoryStatus(false))
  }
})


console.log(props.categoryList)

  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  function plusBtn() {
    !active ? setActive(true) : setActive(false);
  }

  return (
    <div className="brend">
      <div className="brend-title">
        <h5>{id === "butun-telefonlar"? props.brendTitle:id === "aksessuarlar"? props.brendTitle :   props.categoryTitle}{props.categoryAccessoryTitle && props.categoryAccessoryTitle}</h5>
        <img
          onClick={plusBtn}
          src={!active ?PlusIcon : MinusIcon}
          alt="logo"
        />
      </div>
      <div className={!active ? "brend-text" : "brend-text active-brend"}>
        <form>
          {props.brendList &&
          id ==="butun-telefonlar"?
          props.brendList.map((item, index)=>(
            <div key={index}>
                <Checkbox onClick={(e) => e.target.checked?dispatch(filterString(item)):dispatch(deleteString(item)) } id={item} value={item}  color="success" />
                <label htmlFor={item}>{item}</label>
              </div>
            )) :
            id==="aksessuarlar"?
           props.brendListAccessory &&
            props.brendListAccessory.map((item, index)=>(
              <div key={index}>
                <Checkbox onClick={(e) => e.target.checked?dispatch(setAccessoryList(item)):dispatch(deleteAccessoryList(item)) } id={item} value={item}  color="success" />
                <label htmlFor={item}>{item}</label>
              </div>
            ))
            :
            props.categoryList &&
            props.categoryList.map((item, index)=>(
              <div key={index}>
                <Checkbox onClick={(e) => e.target.checked?dispatch(setCategoryList(item==="Telefon"?"phone":"aksessuarlar")):dispatch(deleteCategoryList(item==="Telefon"?"phone":"aksessuarlar")) } id={item} value={item}  color="success" />
                <label htmlFor={item}>{item}</label>
              </div>
            )) 
          }
          {
             props.categoryAccessoryList &&
             props.categoryAccessoryList.map((item, index)=>(
               <div key={index}>
                 <Checkbox onClick={(e) => e.target.checked?dispatch(setAccessoryCategory(item)):dispatch(deleteAccessoryCategory(item)) } id={item} value={item}  color="success" />
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
