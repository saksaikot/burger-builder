import * as actionType from "./actionTypes";

export const updateIngredientAmount = (ingredientAmount) => {
  return {
    type: actionType.UPDATE_INGREDIENT_AMOUNT,
    payload: ingredientAmount,
  };
};
