import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {sortArray,returnDefaultSort,} from "../../../../Reducer/ProductReducer";
import { setActive } from "../../../../Reducer/FilterReducer";
import FilterBtn from "../../../../assets/images/filter.svg";
import Swap from "../../../../assets/images/swap.svg"
import { useLocation  } from 'react-router-dom'

function ProductSort() {
  const activeFilter = useSelector((state) => state.filter.filterActive);
  const count = useSelector((state) => state.category.arrayList.length);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    document.querySelector('.product-select').selectedIndex=0
  }, [location]);

  return (
    <div className="product-sort">
      <p>{count} məhsul tapıldı</p>
      <div className="product-btns">
        <div className="box-sort">
          <img src={Swap} alt="logo"/>
            <select
              className="product-select"
              defaultValue={1}
              onChange={(e)=>{
                if(e.target.value==1){
                  dispatch(returnDefaultSort())
                }else if(e.target.value==2){
                  dispatch(sortArray(true))

                }else if(e.target.value==3){
                  dispatch(sortArray(false))
                }
              }}
            >
              <option value={1}>
                Ən Yenilər
              </option>
              <option value={2}>
                Qiymət - Artan sıra
              </option>
              <option  value={3}>
                Qiymət - Azalan sıra
              </option>
            </select>
        </div>
        <div
          onClick={() => {
            !activeFilter
              ? dispatch(setActive(true))
              : dispatch(setActive(false));
          }}
          className="filter-btn"
        >
          <img src={FilterBtn} alt="logo" />
          Filterləmələr
        </div>
      </div>
    </div>
  );
}

export default ProductSort;
