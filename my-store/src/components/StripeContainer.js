import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const { REACT_APP_PUBLIC_KEY } = process.env
console.log(REACT_APP_PUBLIC_KEY)

const stripeTestPromise = loadStripe(REACT_APP_PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}