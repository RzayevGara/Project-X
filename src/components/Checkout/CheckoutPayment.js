import React, { useState, useEffect } from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Button from "@mui/material/Button";
import commerce from "../../lib/Commerce";
import { useDispatch, useSelector } from "react-redux";
import { setCartToken } from "../../Reducer/CheckoutReducer";

const stripePromise = loadStripe(
  "pk_test_51KzJJfIg2uXdi1sJ0Fwc4CFiJeOemEshvxDbSkAyDnX8rs5vNWSSq70YbiMkB05u75uP8VmqRqYyk9co1LdU7UhI00npklIb35"
);

function CheckoutPayment() {
  const dispatch = useDispatch();

  useEffect(() => {
    commerce.checkout
      .generateToken("cart_p6dP5g1KJYwn7k", { type: "cart" })
      .then((checkout) => dispatch(setCartToken(checkout.id)));
  }, [dispatch]);
  const cartToken = useSelector((state) => state.checkout.cartToken);

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    console.log(paymentMethod);

    if (error) {
      console.log("Error ======>>>>", error);
    } else {
      // commerce.checkout.getShippingOptions(`${token}`, {
      //   country: 'US',
      //   region: 'CA',
      // }).then((response) => console.log(response));

      commerce.checkout
        .capture(`${cartToken}`, {
          customer: {
            firstname: "John",
            lastname: "Doe",
            email: "john.doe@example.com",
          },
          shipping: {
            name: "John Doe",
            street: "123 Fake St",
            town_city: "San Francisco",
            county_state: "US-CA",
            postal_zip_code: "94103",
            country: "US",
          },
          fulfillment: {
            shipping_method: "ship_r2LM5Q4GvoZV1g",
          },
          payment: {
            gateway: "stripe",
            stripe: {
              payment_method_id: paymentMethod.id,
            },
          },
        })
        .then((response) => console.log(response));
    }
  };
  return (
    <>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <div className="actions payment-actions">
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
}

export default CheckoutPayment;
