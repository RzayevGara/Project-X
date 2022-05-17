import React, {useState,useEffect} from "react";
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
import {setCartID, setName, setLastName, setEmail, setPhone} from '../Reducer/CheckoutReducer'




function Checkout() {



  const dispatch = useDispatch()

  const [disabled, setdisabled] = useState(true)

  useEffect(() => {
    commerce.cart.retrieve().then((cart) =>dispatch(setCartID(cart.id)));
  })
  const [activeStep, setActiveStep] = React.useState(0);


  const fname = useSelector((state) => state.checkout.fname)
  const lname = useSelector((state) => state.checkout.lname)
  const email  = useSelector((state) => state.checkout.email)
  const phone  = useSelector((state) => state.checkout.phone)
  console.log(fname)

  const shippingName = useSelector((state) => state.checkout.shippingName)
  const shippingAddress = useSelector((state) => state.checkout.shippingAddress)
  const shippingCountry  = useSelector((state) => state.checkout.shippingCountry)
  const shippingCity  = useSelector((state) => state.checkout.shippingCity)

  console.log(shippingCountry)

  useEffect(() =>{
    if(fname!=="" && lname!=="" && email!=="" && phone!==""){
      setdisabled(false)
    }else{
      setdisabled(true)
    }
  }, [fname, email,lname,phone])


const handleSubmit = (e) => {
  e.preventDefault();
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // console.log(e.target.checkValidity())
  // dispatch(setName(e.target[0].value))
  // dispatch(setLastName(e.target[1].value))
  // dispatch(setEmail(e.target[2].value))
  // dispatch(setPhone(e.target[3].value))
}

const handleSubmitSecond = (e) => {
  e.preventDefault();
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // console.log(e.target.checkValidity())
  // dispatch(setName(e.target[0].value))
  // dispatch(setLastName(e.target[1].value))
  // dispatch(setEmail(e.target[2].value))
  // dispatch(setPhone(e.target[3].value))
}

  const steps = [
    {
      label: "Şəxsi məlumatlar",
      description: <CheckoutUserInfo submit={handleSubmit}/>,
    },
    {
      label: "Çatdırılma",
      description: <CheckoutUserAddress submit={handleSubmitSecond}/>,
    },
    {
      label: "Ödəniş",
      description: <CheckoutPayment setActiveStep={setActiveStep}/>,
    },
  ];


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="checkout">
      <div className="container">
        <Box className="checkout-box">
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
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
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1, }}
                        disabled={disabled}

                      >
                        {index === steps.length - 1 ? "Tamamla" : "Davam"}
                      </Button>
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
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
        <BasketPrice/>
      </div>
    </div>
  );
}

export default Checkout;
