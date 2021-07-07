import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Control from "./Control/Control";

const INGREDIENTS_PRICE = {
  Salad: 20,
  Cheese: 40,
  Meat: 90,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { name: "Salad", amount: 0 },
      { name: "Meat", amount: 0 },
      { name: "Cheese", amount: 0 },
    ],
    totalPrice: 80,
  };

  handleMoreLessIngredient(name, amount) {
    // console.log(this);
    const ingredients = [...this.state.ingredients];
    const index = ingredients.findIndex((x) => x.name === name);
    if (ingredients[index].amount === 0 && amount === -1) return;
    const totalPrice = this.state.totalPrice + amount * INGREDIENTS_PRICE[name];
    ingredients[index].amount += amount;
    this.setState({ ingredients, totalPrice });
    console.log(name, amount);
  }
  render() {
    const { ingredients } = this.state;
    return (
      <div className="container d-flex flex-md-row flex-column justify-content-center align-items-center">
        <Burger ingredients={ingredients} />
        <Control
          handleMoreLessIngredient={this.handleMoreLessIngredient.bind(this)}
          totalPrice={this.state.totalPrice}
        />
      </div>
    );
  }
}
