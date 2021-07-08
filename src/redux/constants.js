export const BASE_PRICE = 80;
export const INGREDIENTS_PRICE = {
  Salad: 20,
  Cheese: 40,
  Meat: 90,
};
export const PAYMENT_OPTION = ["Cash on delivery", "Bkash"];

export const INITIAL_STATE = {
  ingredients: [
    { name: "Salad", amount: 0 },
    { name: "Meat", amount: 0 },
    { name: "Cheese", amount: 0 },
  ],
  totalPrice: BASE_PRICE,
  purchasable: false,
  checkout: {
    name: "",
    address: "",
    phone: "",
    payment: PAYMENT_OPTION[0],
  },
};
