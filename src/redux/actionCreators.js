import axios from "axios";
import * as actionType from "./actionTypes";

export const updateIngredientAmount = (ingredientAmount) => {
  return {
    type: actionType.UPDATE_INGREDIENT_AMOUNT,
    payload: ingredientAmount,
  };
};

export const updateCheckoutForm = (checkout) => ({
  type: actionType.UPDATE_CHECKOUT_FORM,
  payload: checkout,
});

export const resetState = () => ({
  type: actionType.RESET_STATE,
});

export const loadOrders = (orders) => ({
  type: actionType.LOAD_ORDERS,
  payload: orders,
});

export const orderLoadFailed = () => ({
  type: actionType.ORDER_LOAD_FAILED,
});

export const fetchOrders = () => (dispatch) => {
  axios
    .get(
      "https://burger-builder-d3e66-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json"
    )
    .then((response) => {
      dispatch(loadOrders(response.data));
    })
    .catch((error) => {
      dispatch(orderLoadFailed());
    });
};
