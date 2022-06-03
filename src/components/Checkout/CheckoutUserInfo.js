import React, {useEffect} from "react";
import {
  setName,
  setLastName,
  setEmail,
  setPhone,
} from "../../Reducer/CheckoutReducer";
import { useDispatch, useSelector} from "react-redux";

import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

function CheckoutUserInfo(props) {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.checkout.fname)
  const lname = useSelector((state) => state.checkout.lname)
  const email = useSelector((state) => state.checkout.email)
  const phone = useSelector((state) => state.checkout.phone)

  useEffect(() => {
    if(name!=="" && lname!=="" && email!=="" && phone!==""){

      setValue("nameInput", `${name}`)
      setValue("lnameInput", `${lname}`)
      setValue("emailInput", `${email}`)
      setValue("phoneInput", `${phone}`)
    }
  },[])

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue 
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (data) {
      dispatch(setName(data.nameInput));
      dispatch(setLastName(data.lnameInput));
      dispatch(setEmail(data.emailInput));
      dispatch(setPhone(data.phoneInput));
    }
  };
  

  return (
    <div className="checkout-user-info">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="checkout-user-info_name_surname">
          <div>
            <label>Ad</label>
            <input
              id="inputName"
              placeholder="Adınızı daxil edin"
              {...register("nameInput", 
              {
                required: "Adınızı daxil edin.",
                
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
            <label>Soyad</label>
            <input
            id="inputLname"
              placeholder="Soyadınızı daxil edin"
              {...register("lnameInput", {
                required: "Soyadınızı daxil edin.",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="lnameInput"
              render={({ message }) => (
                <p className="error-message">{message}</p>
              )}
            />
          </div>
        </div>
        <div className="checkout-user-info_name_surname">
          <div>
            <label>E-mail</label>
            <input
            id="inputEmail"
              placeholder="nümunə@gmail.com"
              {...register("emailInput", {
                required: "Email ünvanınızı daxil edin.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Yanlış email ünvanı",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="emailInput"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p className="error-message" key={type}>
                        {message}
                      </p>
                    ))
                  : null;
              }}
            />
          </div>
          <div>
            <label>Mobil nömrə</label>
            <input
            id="inputPhone"
              placeholder="Mobil nömrənizi daxil edin"
              {...register("phoneInput", {
                required: "Mobil nömrənizi daxil edin.",
                pattern: {
                  value: /\d+/,
                  message: "Yalnız rəqəm daxil edin.",
                },
                minLength: {
                  value: 10,
                  message: "Minimum 10 simvol olmalıdır.",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="phoneInput"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p className="error-message" key={type}>
                        {message}
                      </p>
                    ))
                  : null;
              }}
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

export default CheckoutUserInfo;
