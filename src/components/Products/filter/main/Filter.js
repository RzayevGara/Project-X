import React, {useEffect} from "react";
import FilterCategory from "../filter-category/FilterCategory"
import FilterPrice from "../filter-price/FilterPrice"
import Xbtn from "../../../../assets/images/X-btn.svg"
import {useDispatch, useSelector} from "react-redux";
import { setActive } from "../../../../Reducer/FilterReducer";

function Filter() {
  const activeFilter = useSelector((state) => state.filter.filterActive);
  const dispatch = useDispatch();
  
  useEffect(() => {
    let body = document.body
    activeFilter?body.classList.add('active-body'):body.classList.remove('active-body')
  }, [activeFilter])

  return (
    <div className={!activeFilter?"filter": "filter active-filter"}>
      <div className="filter-menu_mobile">
        <img 
        onClick={() => {
          !activeFilter
            ? dispatch(setActive(true))
            : dispatch(setActive(false));
        }}
        src={Xbtn} alt="logo"/>
        <h4>Filterləmələr</h4>
      </div>
      <div className="filter-category">
        <FilterCategory brendTitle={"Brend"} brendList={["Apple", "Samsung", "Xiaomi", "Huawei"]}/>
        {/* <FilterCategory brendTitle={"Rəng"} brendList={["Qara", "Ağ", "Göy", "Yaşıl"]}/> */}
        <FilterPrice/>

      </div>
      <div  onClick={() => {
            dispatch(setActive(false));
        }} className="filter-button">
        Filterlənmiş məhsulları göstər
      </div>
    </div>
  );
}

export default Filter;
