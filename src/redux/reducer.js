import * as actionTypes from "./actionTypes";

const BASE_PRICE = 80;
const INGREDIENTS_PRICE = {
  Salad: 20,
  Cheese: 40,
  Meat: 90,
};

const INITIAL_STATE = {
  ingredients: [
    { name: "Salad", amount: 0 },
    { name: "Meat", amount: 0 },
    { name: "Cheese", amount: 0 },
  ],
  totalPrice: BASE_PRICE,
  purchasable: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  const ingredients = [...state.ingredients];

  switch (action.type) {
    case actionTypes.UPDATE_INGREDIENT_AMOUNT:
      // console.log(this);
      console.log("action", action);
      const { name, amount } = action.payload;
      const index = ingredients.findIndex((x) => x.name === name);
      if (ingredients[index].amount === 0 && amount === -1) return state;
      const totalPrice = state.totalPrice + amount * INGREDIENTS_PRICE[name];
      ingredients[index].amount += amount;
      let purchasable = true;
      if (totalPrice === BASE_PRICE) {
        purchasable = false;
      }
      return { ...state, ingredients, totalPrice, purchasable };
    default:
      return state;
  }
};
