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

export const resetBurgerState = () => ({
  type: actionType.RESET_BURGER_STATE,
});

export const loadOrders = (orders) => ({
  type: actionType.LOAD_ORDERS,
  payload: orders,
});

export const orderLoadFailed = () => ({
  type: actionType.ORDER_LOAD_FAILED,
});

export const fetchOrders = (userId, token) => (dispatch) => {
  axios
    .get(
      `https://burger-builder-d3e66-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json?orderBy="userId"&equalTo="${userId}"&auth=${token}`
    )
    .then((response) => {
      dispatch(loadOrders(response.data));
    })
    .catch((error) => {
      dispatch(orderLoadFailed());
    });
};

export const saveOrder = (order) => ({
  type: actionType.SAVE_ORDER,
  payload: order,
});
