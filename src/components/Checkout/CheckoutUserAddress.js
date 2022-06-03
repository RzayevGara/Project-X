import React, { useEffect, useState } from "react";
import {
  setShippingName,
  setShippingAddress,
  setShippingCountry,
  setShippingCity,
  setCountryIndex
} from "../../Reducer/CheckoutReducer";
import { useDispatch, useSelector} from "react-redux";

import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

function CheckoutUserAddress(props) {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm({
    criteriaMode: "all",
  });

  const shippingName = useSelector((state) => state.checkout.shippingName)
  const shippingAddress = useSelector((state) => state.checkout.shippingAddress)
  const shippingCountry = useSelector((state) => state.checkout.countryIndex)
  const shippingCity = useSelector((state) => state.checkout.shippingCity)

  
  useEffect(() => {
    if(shippingName!=="" && shippingAddress!=="" && shippingCountry!=="" && shippingCity!==""){

      setValue("nameInput", `${shippingName}`)
      setValue("addressInput", `${shippingAddress}`)
      // setValue("countryInput", `${shippingCountry}`)
      setValue("cityInput", `${shippingCity}`)
    }
  },[])


  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/iso")
      .then((data) => data.json())
      .then((response) => setCountry(response.data));
  }, []);

  
  const onSubmit = (data) => {
    props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (data) {
      dispatch(setShippingName(data.nameInput));
      dispatch(setShippingAddress(data.addressInput));
      dispatch(setShippingCity(data.cityInput));
      dispatch(setCountryIndex(data.countryInput));
      country.forEach((item, index) => {
        if (data.countryInput == index) {
          dispatch(setShippingCountry(item.Iso2));
        }
      });
    }
  };

  return (
    <div className="checkout-user-address">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="checkout-user-address_city">
          <div>
            <label>Ad və Soyad</label>
            <input
              placeholder="Adınızı və soyadınızı daxil edin"
              {...register("nameInput", {
                required: "Adınızı və soyadınızı daxil edin",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="nameInput"
              render={({ message }) => (
                <p className="error-message">{message}</p>
              )}
            />
          </div>
          <div>
            <label>Ünvan</label>
            <input
              placeholder="Ünvanınızı daxil edin"
              {...register("addressInput", {
                required: "Ünvanınızı daxil edin",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="addressInput"
              render={({ message }) => (
                <p className="error-message">{message}</p>
              )}
            />
          </div>
        </div>
        <div className="checkout-user-address_city">
          <div>
            <label>Ölkə</label>
            <select  
            defaultValue=""
              {...register("countryInput", {
                required: "Ölkənizi qeyd edin",
              })}
              >
                 <option value="" disabled>Ölkənizi qeyd edin</option>
                 {country &&
                  country.map((item, index) => (

                    <option key={index} value={index}>{item.name}</option>

                  ))}
            </select>
            <ErrorMessage
              errors={errors}
              name="countryInput"
              render={({ message }) => (
                <p className="error-message">{message}</p>
              )}
            />
          </div>
          <div>
            <label>Şəhər</label>
            <input
              placeholder="Şəhərinizi qeyd edin"
              {...register("cityInput", {
                required: "Şəhərinizi qeyd edin",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="cityInput"
              render={({ message }) => (
                <p className="error-message">{message}</p>
              )}
            />
          </div>
        </div>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 1, mr: 1, display: "block", width: "150px" }}
        >
          Davam
        </Button>
      </form>
    </div>
  );
}

export default CheckoutUserAddress;
