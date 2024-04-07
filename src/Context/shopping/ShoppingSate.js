import { useReducer } from "react";
import shoppingContext from "./shoppingContext";
import { shoppingReducer } from "./shoppingReducer";

export const ShoppingState = (props) => {
  const initialState = { basket: [], user: null };

  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  //Selectors
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.item.price + amount, 0);

  const addToBasket = async (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  };

  const emptyBasket = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
  };

  const setUser = (user) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  const removeFromBasketHandler = (item) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: item });
  };

  return (
    <shoppingContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        getBasketTotal,
        addToBasket,
        setUser,
        removeFromBasketHandler,
        emptyBasket,
      }}
    >
      {props.children}
    </shoppingContext.Provider>
  );
};
