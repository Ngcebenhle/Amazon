import React, { useContext, useEffect, useState } from "react";
import "./Payment.css";
import Checkout from "./Checkout";
import instance from "../Axios";

import shoppingContext from "../Context/shopping/shoppingContext";
// import CheckOutProducts from "../Components/checkOut/CheckOutProducts";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import Stripe from 'stripe';
import { db } from "../firebase";

function Payment() {
  const shop = useContext(shoppingContext);
  const { basket, user, getBasketTotal, emptyBasket } = shop;

  const stripe = useStripe();
  const elements = useElements();

  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  useEffect(() => {
    //Generate special stripe secret which will allow us to charge the customer
    const getClientSecret = async () => {
      const response = await instance({
        method: "post",
        url: "/payments/create?total=" + getBasketTotal(basket) * 100, // how can i make this into an interger ??????????
      });
      // console.log("this is my work " + response.data.clientSecret);
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  // console.log("this is " + clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        db.collection("user")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        emptyBasket();
        history.push("/Orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? "e.error.massage" : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout
          <Link to="checkout">{basket?.length} items</Link>
        </h1>

        <div className="payment_section">
          <div className="payment_tittle">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 ReactJS Road</p>
            <p>Cape Town.SA</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_tittle">
            <h3>Review items and Delivery</h3>
          </div>

          <div className="payment_items">
            {/* {basket.map((item) => (
              <Checkout
                key={item.id}
                id={item.id}
                image={item.image}
                tittle={item.tittle}
                price={item.price}
                rating={item.rating}
              />
            ))} */}
            <Checkout/>
          </div>
        </div>

        <div className="payment_tittle">
          <h3>Payment Method</h3>
        </div>
        <div className="payment_details">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div className="payment_price_container">
              <CurrencyFormat
                renderText={(value) => {
                  <h3>Order Total: {value}</h3>;
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />

              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? "Processing" : "Buy Now"}</span>
              </button>
            </div>

            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
