import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import {sortArray,returnDefaultSort,} from "../../../../Reducer/ProductReducer";
import { setActive } from "../../../../Reducer/FilterReducer";
import FilterBtn from "../../../../assets/images/filter.svg";

function ProductSort() {
  const activeFilter = useSelector((state) => state.filter.filterActive);

  const [age, setAge] = useState("");
  console.log(age); ///age warning verirdi
  const count = useSelector((state) => state.category.arrayList.length);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="product-sort">
      <p>{count} məhsul tapıldı</p>
      <div className="product-btns">
        <Box sx={{ minWidth: 220 }} size="small">
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange}
              defaultValue={10}
            >
              <MenuItem
                onClick={() => dispatch(returnDefaultSort())}
                default
                value={10}
              >
                Ən Yenilər
              </MenuItem>
              <MenuItem onClick={() => dispatch(sortArray(true))} value={20}>
                Qiymət - Artan sıra
              </MenuItem>
              <MenuItem onClick={() => dispatch(sortArray(false))} value={30}>
                Qiymət - Azalan sıra
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
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
