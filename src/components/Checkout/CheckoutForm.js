import React from 'react'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import {setNumber, setDate, setCVC} from '../../Reducer/CheckoutReducer'

function CheckoutForm(props) {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  const handleNumber =(e)=>{
    setNumber(e.target.value);
  }
  
  const handleDate =(e)=>{
    setDate(e.target.value);
  }

  const handleCVC =(e)=>{
    setCVC(e.target.value);
  }


  return (
    <PaymentInputsWrapper  {...wrapperProps}>
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps({onChange: handleNumber})} />
      <input {...getExpiryDateProps({onChange: handleDate})} />
      <input {...getCVCProps({onChange: handleCVC})} />
    </PaymentInputsWrapper>
  );
}

export default CheckoutForm