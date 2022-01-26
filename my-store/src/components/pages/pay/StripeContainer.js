import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const REACT_APP_PUBLIC_KEY =
  "pk_test_51KGwawJRq6rRVvOveKLD6UYuJbt2ukhqFMYQDwplYv1h8vBtIkanKowA2gg2td0cSwI1X5CEI2PRdfoQ2J6lSyIp00by8eyzHf";

const stripeTestPromise = loadStripe(REACT_APP_PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
