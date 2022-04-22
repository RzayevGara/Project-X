import React from "react";
import FilterCategory from "../filter-category/FilterCategory"

function Filter() {
  
  return (
    <div className="filter">
      <FilterCategory brendTitle={"Brend"} brendList={["Apple", "Samsung", "Xiaomi", "Huawei"]}/>
      <FilterCategory brendTitle={"Rəng"} brendList={["Qara", "Ağ", "Göy", "Yaşıl"]}/>
      <FilterCategory brendTitle={"Qiymət"} brendList={["0-500 AZN", "500-1000 AZN", "1000-1500 AZN", "1500 + AZN"]}/>
    </div>
  );
}

export default Filter;
