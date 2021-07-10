import React from "react";

export default function Order({ customer, ingredients, orderTime, price, id }) {
  return (
    <div className="border my-3">
      <p>Order number:{id}</p>
      <p>Delivery Address:{customer.address}</p>

      <p>
        {ingredients.map((ingredient) => (
          <span
            key={ingredient.name}
            className="border border--no-box-shadow py-1 mx-"
          >
            {ingredient.amount} &times;
            <span className="mx-1">{ingredient.name}</span>
          </span>
        ))}
      </p>

      <p>Total: {price} BDT</p>
    </div>
  );
}
