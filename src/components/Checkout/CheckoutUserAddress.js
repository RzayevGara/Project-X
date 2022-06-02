import React, { useEffect, useState } from "react";
import {
  setShippingName,
  setShippingAddress,
  setShippingCountry,
  setShippingCity,
  setDisable,
  setCountrySelect,
} from "../../Reducer/CheckoutReducer";
import { useDispatch, useSelector } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function CheckoutUserAddress(props) {
  const dispatch = useDispatch();

  const [country, setCountry] = useState([]);

  const shippingName = useSelector((state) => state.checkout.shippingName);
  const shippingAddress = useSelector(
    (state) => state.checkout.shippingAddress
  );
  const shippingCountry = useSelector(
    (state) => state.checkout.shippingCountry
  );
  const shippingCity = useSelector((state) => state.checkout.shippingCity);

  useEffect(() => {
    if (
      shippingName !== "" &&
      shippingAddress !== "" &&
      shippingCountry !== "" &&
      shippingCity !== ""
    ) {
      dispatch(setDisable(false));
    } else {
      dispatch(setDisable(true));
    }
  }, [dispatch, shippingName, shippingAddress, shippingCountry, shippingCity]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/iso")
      .then((data) => data.json())
      .then((response) => setCountry(response.data));
  },[]);

  const handleChange = (event) => {
    dispatch(setCountrySelect(event.target.value));
  };

  const countrySelect = useSelector((state) => state.checkout.country);
  console.log(countrySelect)

  useEffect(() => {
    country.forEach((item, index) => {
      if (countrySelect === index) {
        dispatch(setShippingCountry(item.Iso2));
      }
    });
  }, [countrySelect, country, dispatch]);

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
              value={shippingName}
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
              value={shippingAddress}
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
                value={countrySelect}
                label="Age"
                onChange={handleChange}
                required
              >
                {country &&
                  country.map((item, index) => (
                    <MenuItem key={index} value={index}>
                      {item.name}
                    </MenuItem>
                  ))}
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
              type="text"
              required
              value={shippingCity}
            />
          </div>
        </div>
        <button style={{ display: "none" }} type="submit"></button>
      </form>
    </div>
  );
}

export default CheckoutUserAddress;
