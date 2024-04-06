import React from "react";
import CurrencyFormat from "react-currency-format";
import "../Components/subTotal.css";
import shoppingContext from "../Context/shopping/shoppingContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SubTotal() {
  const shop = useContext(shoppingContext);
  const { basket, getBasketTotal } = shop;
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal({basket.length} item):<strong>{value}</strong>{" "}
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
      />
      <button onClick={(e) => {
        console.log(getBasketTotal(basket))
        history.push("/payment")}}>
        proceed to checkout
      </button>
    </div>
  );
}

export default SubTotal;
