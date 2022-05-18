import React, { useState, useEffect } from "react";
import PlusIcon from "../../../../assets/images/Iconplus.svg";
import MinusIcon from "../../../../assets/images/IconMinus.svg";
import { useDispatch} from "react-redux";
import { deleteString,filterString , setCategoryList, deleteCategoryList, setStringStatus, setCategoryStatus, setAccessoryStatus, setAccessoryList, deleteAccessoryList, setAccessoryCategory, deleteAccessoryCategory, resetList} from "../../../../Reducer/ProductReducer";
import {useParams} from 'react-router-dom'

const FilterCategory=(props)=> {
  const dispatch = useDispatch();

let {id} = useParams()

useEffect(()=> {
  if(id==="butun-telefonlar"){
    dispatch(setCategoryStatus(false))
    dispatch(setStringStatus(true))
    dispatch(setAccessoryStatus(false))
  }else if(id==="aksesuarlar"){
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


useEffect(()=>{
  dispatch(resetList([]))
  document.querySelectorAll(".myCheck").forEach((item)=>{
    item.checked=false
  })
},[id, dispatch])


  const [active, setActive] = useState(false);

  function plusBtn() {
    !active ? setActive(true) : setActive(false);
  }


  return (
    
    <div className="brend">
      <div className="brend-title">
        <h5>{id === "butun-telefonlar"? props.brendTitle:id === "aksesuarlar"? props.brendTitle :   props.categoryTitle}{props.categoryAccessoryTitle && props.categoryAccessoryTitle}</h5>
        <img
          onClick={plusBtn}
          src={!active ?PlusIcon : MinusIcon}
          alt="logo"
        />
      </div>
      <div className={!active ? "brend-text" : id ==="butun-telefonlar"? "brend-text active-all":id==="aksesuarlar"? "brend-text active-accessory" : "brend-text active-brend"}>
        <form className="form-category">
          {props.brendList &&
          id ==="butun-telefonlar"?
          props.brendList.map((item, index)=>(
            <div className="category-list" key={index}>
                <input className="myCheck" type="checkbox" onClick={(e) => e.target.checked?dispatch(filterString(item)):dispatch(deleteString(item)) } id={item} value={item}  color="success" />
                <label htmlFor={item}>{item}</label>
              </div>
            )) :
            id==="aksesuarlar"?
           props.brendListAccessory &&
            props.brendListAccessory.map((item, index)=>(
              <div className="category-list" key={index}>
                <input className="myCheck" type="checkbox" onClick={(e) => e.target.checked?dispatch(setAccessoryList(item)):dispatch(deleteAccessoryList(item)) } id={item} value={item}  color="success" />
                <label htmlFor={item}>{item}</label>
              </div>
            ))
            :
            props.categoryList &&
            props.categoryList.map((item, index)=>(
              <div className="category-list" key={index}>
                <input className="myCheck" type="checkbox" onClick={(e) => e.target.checked?dispatch(setCategoryList(item==="Telefon"?"butun-telefonlar":"aksesuarlar")):dispatch(deleteCategoryList(item==="Telefon"?"butun-telefonlar":"aksesuarlar")) } id={item} value={item}  color="success" />
                <label htmlFor={item}>{item}</label>
              </div>
            )) 
          }
          {
             props.categoryAccessoryList &&
             props.categoryAccessoryList.map((item, index)=>(
               <div className="category-list" key={index}>
                 <input  className="myCheck" type="checkbox" onClick={(e) => e.target.checked?dispatch(setAccessoryCategory(item)):dispatch(deleteAccessoryCategory(item)) } id={item} value={item}  color="success" />
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
