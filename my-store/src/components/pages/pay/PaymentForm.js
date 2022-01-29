import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useBackend from "../../../hooks/useBackend";
import "../../../css/Stripe.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const cartDummyData = [
  {
    product_name: "Monstera Clay Earings",
    image: "https://live.staticflickr.com/65535/51561477070_77b09350ba_b.jpg",
    cart_item_id: -1,
    user_id: -1,
    product_id: -1,
    quantity: 2,
    price: 20,
  },
  {
    product_name: "Wildflower Screen Print Clay Earings",
    image: "https://live.staticflickr.com/65535/51561243964_7c0eb0c4b4_b.jpg",
    cart_item_id: -2,
    user_id: -1,
    product_id: -2,
    quantity: 1,
    price: 20,
  },
];

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const api = useBackend();

  const handleCartAmount = (DummyData) => {
    let finalAmount = 0;
    DummyData.forEach((item) => {
      finalAmount = finalAmount + item.price * item.quantity;
    });
    return finalAmount;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log("payment method here", paymentMethod);

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await api.post("/api/stripe/payment", {
          amount: handleCartAmount(cartDummyData) * 100,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success && (
        <form onSubmit={handleSubmit}>
          <h3>Shipping Information</h3>
          <div className="stripeForm">
            <label for="city">City</label>
            <input id="city" placeholder="city" />
            <br />
            <label for="country">Country</label>
            <input id="country" placeholder="country" />
            <br />
            <label for="address">Address</label>
            <input id="address" placeholder="line1" />
            <br />
            <label for="apt_suite_etc">Apartment, suite, etc.</label>
            <input id="apt_suite_etc" placeholder="line2" />
            <br />
            <label for="zip">Zipcode</label>
            <input id="zip" placeholder="postal code" />
            <br />
            <label for="state">State</label>
            <input id="state" placeholder="state" />
          </div>
          <h3>Payment Information</h3>
          <CardElement options={CARD_OPTIONS} />
          <br />
          <button>Pay</button>
        </form>
      )}
    </>
  );
}
