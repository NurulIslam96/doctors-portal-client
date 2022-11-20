import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";

const CheckoutForm = ({ payorDetails }) => {
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState("");
  const { price, email, patient, _id } = payorDetails;
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({price}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      // console.log('[PaymentMethod]', paymentMethod);
    }
    setProcessing(true)
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      },
    );
    if(confirmError){
      setError(confirmError.message)
      return
    }
    if(paymentIntent){
      const paymentInfo = {
        name: patient,
        email,
        booking_id: _id,
        transactionId: paymentIntent.id
      }
      toast.success("Payment Completed")
      fetch("http://localhost:5000/payment", {
        method: "POST",
        headers: {
          "content-type":"application/json",
          authorization : `bearer ${localStorage.getItem("accessToken")}`
        },
        body: JSON.stringify(paymentInfo)
      })
      .then(res => res.json())
      .then(data => {
        setProcessing(false)
      })
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="btn btn-sm btn-primary mt-5"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default CheckoutForm;
