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
