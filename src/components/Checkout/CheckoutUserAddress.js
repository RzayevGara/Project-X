import React, { useEffect, useState } from "react";
import {
  setShippingName,
  setShippingAddress,
  setShippingCountry,
  setShippingCity,
} from "../../Reducer/CheckoutReducer";
import { useDispatch } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function CheckoutUserAddress(props) {
  const dispatch = useDispatch();

  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/iso")
      .then((data) => data.json())
      .then((response) => setCountry(response.data));
  });

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  useEffect(() => {
    country.forEach((item, index) => {if(age===index){dispatch(setShippingCountry(item.Iso2))}})
  }, [age, country, dispatch])


  return (
    <div className="checkout-user-address">
      <form onSubmit={props.submit}>
        <div className="checkout-user-address_city">
          <div>
            <label>Ad və Soyad</label>
            <input
              onChange={(e) => {
                dispatch(setShippingName(e.target.value));
              }}
              placeholder="Adınızı və soyadınızı daxil edin"
              type="text"
              required
            />
          </div>
          <div>
            <label>Ünvan</label>
            <input
              onChange={(e) => {
                dispatch(setShippingAddress(e.target.value));
              }}
              placeholder="Ünvanınızı daxil edin"
              type="text"
              required
            />
          </div>
        </div>
        <div className="checkout-user-address_city">
          <div>
            <label>Ölkə</label>
            <FormControl sx={{ width: "310px" }}>
              <InputLabel id="demo-simple-select-label">Ölkə</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                {country && 
                country.map((item, index)=>(
                  <MenuItem key={index} value={index}>{item.name}</MenuItem>
                ))
                }
              </Select>
            </FormControl>
          </div>
          <div>
            <label>Şəhər</label>
            <input
              onChange={(e) => {
                dispatch(setShippingCity(e.target.value));
              }}
              placeholder="Şəhərinizi qeyd edin"
              type="email"
              required
            />
          </div>
        </div>
        <button style={{ display: "none" }} type="submit"></button>
      </form>
    </div>
  );
}

export default CheckoutUserAddress;
