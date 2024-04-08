import React from "react";
import "./Orders.css";
import { db } from "../firebase";
import Checkout from "./Checkout";
import "./Orders.css"
import { useHistory } from "react-router-dom";

const Orders = () => {
  const history = useHistory();
  return (
    <div className="orders">
      <Checkout />
      <hr/>
      <h1>Order Completed successfully</h1>
      <button onClick={history("/")}>Continue Shopping</button>
    </div>
  );
};

export default Orders;
