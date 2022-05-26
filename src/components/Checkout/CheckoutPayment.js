import React from "react";
import { Formik, Field } from "formik";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import Button from "@mui/material/Button";
import commerce from "../../lib/Commerce";
import {setLoading, setReset} from "../../Reducer/CheckoutReducer";
import { useDispatch, useSelector } from "react-redux";
import {setSimpleList} from "../../Reducer/CardListReducer"

function CheckoutPayment(props) {
  const dispatch = useDispatch();

  const cartToken = useSelector((state) => state.checkout.cartToken);

  const shippingCountry  = useSelector((state) => state.checkout.shippingCountry)
  
  const shippingMethod  = useSelector((state) => state.checkout.shippingMethod)
  
  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps,
  } = usePaymentInputs();

  const fname = useSelector((state) => state.checkout.fname)
  const lname = useSelector((state) => state.checkout.lname)
  const email  = useSelector((state) => state.checkout.email)
  const phone  = useSelector((state) => state.checkout.phone)
  const shippingName = useSelector((state) => state.checkout.shippingName)
  const shippingAddress = useSelector((state) => state.checkout.shippingAddress)
  const shippingCity  = useSelector((state) => state.checkout.shippingCity)


  return (
    <Formik
      initialValues={{
        cardNumber: "",
        expiryDate: "",
        cvc: "",
      }}
      onSubmit={(data) => {
        if (data) {
          dispatch(setLoading(true))
          
          let number = data.cardNumber
          let date = data.expiryDate
          let cvc = data.cvc
          commerce.checkout
            .capture(`${cartToken}`, {
              customer: {
                firstname: `${fname}`,
                lastname: `${lname}`,
                email: `${email}`,
                phone: `${phone}`,
              },
              shipping: {
                name: `${shippingName}`,
                street: `${shippingAddress}`,
                town_city:`${shippingCity}`,
                country: `${shippingCountry}`,
              },
              fulfillment: {
                shipping_method: `${shippingMethod}`,
              },
              payment: {
                gateway: "test_gateway",
                card: {
                  number: `${number}`,
                  expiry_month: `${date.slice(0, 2)}`,
                  expiry_year: `${date.slice(5, 7)}`,
                  cvc: `${cvc}`,
                  postal_zip_code: "94107",
                },
              },
            })
            .then((response) => {dispatch(setLoading(false));props.setActiveStep((prevActiveStep) => prevActiveStep + 1); commerce.cart.refresh().then((cart) => dispatch(setSimpleList(cart))); dispatch(setReset())});
        }
      }}
      validate={() => {
        let errors = {};
        if (meta.erroredInputs.cardNumber) {
          errors.cardNumber = meta.erroredInputs.cardNumber;
        }
        if (meta.erroredInputs.expiryDate) {
          errors.expiryDate = meta.erroredInputs.expiryDate;
        }
        if (meta.erroredInputs.cvc) {
          errors.cvc = meta.erroredInputs.cvc;
        }
        return errors;
      }}
    >
      {({ handleSubmit }) => (
        <form className="card-info_payment" onSubmit={handleSubmit}>
          <div>
            <PaymentInputsWrapper {...wrapperProps}>
              <svg {...getCardImageProps({ images })} />
              <Field name="cardNumber">
                {({ field }) => (
                  <input
                    {...getCardNumberProps({
                      onBlur: field.onBlur,
                      onChange: field.onChange,
                    })}
                  />
                )}
              </Field>
              <Field name="expiryDate">
                {({ field }) => (
                  <input
                    {...getExpiryDateProps({
                      onBlur: field.onBlur,
                      onChange: field.onChange,
                    })}
                  />
                )}
              </Field>
              <Field name="cvc">
                {({ field }) => (
                  <input
                    {...getCVCProps({
                      onBlur: field.onBlur,
                      onChange: field.onChange,
                    })}
                  />
                )}
              </Field>
            </PaymentInputsWrapper>
          </div>
          <Button type="submit"
          variant="contained"
          sx={{ mt: 1, mr: 1 }}
          >
            Ödəniş et
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default CheckoutPayment;