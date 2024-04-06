import React, { useContext } from "react";
import "./Product.css";
import shoppingContext from "../Context/shopping/shoppingContext";

const Product = ({ id, image, tittle, rating, price }) => {
  const shop = useContext(shoppingContext);
  const { addToBasket } = shop;

  const addToBasketHandler = () => {
    addToBasket({ item: { id, image, tittle, rating, price } });
  };

  return (
    <div className="product" key={id}>
      <img src={image} alt="" />
      <div className="product_info">
        <p>{tittle}</p>

        <div className="product_rating">
          <p>{rating}</p>
        </div>

        <p className="product_price">
          <small>$</small> {price}
        </p>
      </div>
      <button className="product_button" onClick={addToBasketHandler}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
