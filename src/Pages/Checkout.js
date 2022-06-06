import React, {useEffect, useState} from "react";
import "./checkout.sass";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BasketPrice from '../components/Card/full card/Basket price/BasketPrice'
import CheckoutUserInfo from '../components/Checkout/CheckoutUserInfo'
import CheckoutUserAddress from '../components/Checkout/CheckoutUserAddress'
import CheckoutPayment from '../components/Checkout/CheckoutPayment'
import commerce from '../lib/Commerce'
import {useDispatch, useSelector} from "react-redux";
import {setCartID, setCartToken, setShippingMethod, setLiveObject} from '../Reducer/CheckoutReducer'
import { TailSpin  } from 'react-loading-icons'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Checkout() {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const cartToken = useSelector((state) => state.checkout.cartToken);

  const shippingCountry  = useSelector((state) => state.checkout.shippingCountry)

  const items = useSelector((state) => state.listOrder.SimpleList)
  const [checkoutLoading, setCheckoutLoading] = useState(true)

  useEffect(() => {
    if(items){
      if(items.line_items.length>0){
        commerce.checkout
        .generateToken( items.id, { type: "cart" })
        .then((checkout) => {
          dispatch(setCartToken(checkout.id))
          commerce.checkout.getLive(checkout.id).then(live => {dispatch(setLiveObject(live)); setCheckoutLoading(false)})
        });
      }
      else{
        navigate("/sebet", { replace: true })
      }
    }
  }, [items])

  useEffect(() => {
    if(shippingCountry!==""){
      commerce.checkout.getShippingOptions(cartToken, {
      country: `${shippingCountry}`,
    }).then((response) =>{
      console.log("shipping", response)
      if(response.length>0){
        dispatch(setShippingMethod(response[0].id))}
      }
      );
    }
  },[shippingCountry, cartToken,dispatch ])


const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: "Şəxsi məlumatlar",
      description: <CheckoutUserInfo setActiveStep={setActiveStep}/>,
    },
    {
      label: "Çatdırılma",
      description: <CheckoutUserAddress setActiveStep={setActiveStep}/>,
    },
    {
      label: "Ödəniş",
      description: <CheckoutPayment setActiveStep={setActiveStep}/>,
    },
  ];

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const loading = useSelector((state) => state.checkout.loading)

  const success = () =>   toast.success('Endirim kuponu tətbiq edildi.', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const error = () =>   
  toast.error('Endirim kuponu mövcud deyil.', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  return (
    <div className="checkout">
      {loading && 
      <div className="black-page">
        <TailSpin  stroke="#00D68F" className="loading"/>
        <p>Sifarişiniz təsdiqlənir</p>
      </div>
      }
      {checkoutLoading && 
      <div style={{backgroundColor: "white"}} className="black-page">
        <TailSpin  stroke="#00D68F" className="loading"/>
        <p style={{color: "black"}}>Zəhmət olmasa gözləyin</p>
      </div>
      }
      <div className="container">
        <Box className="checkout-box">
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Son addım</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  {step.description}
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Geri
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                Sifarişiniz Tamamlandı!
              </Typography>
            </Paper>
          )}
        </Box>
        <BasketPrice success={success} error={error} checkoutPromo/>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Checkout;
