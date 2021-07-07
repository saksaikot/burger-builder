import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Control from "./Control/Control";

import OrderModal from "./Summery/OrderModal";

const BASE_PRICE = 80;
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
    totalPrice: BASE_PRICE,
    modalOpen: false,
    purchasable: false,
  };

  handleMoreLessIngredient(name, amount) {
    // console.log(this);
    const ingredients = [...this.state.ingredients];
    const index = ingredients.findIndex((x) => x.name === name);
    if (ingredients[index].amount === 0 && amount === -1) return;
    const totalPrice = this.state.totalPrice + amount * INGREDIENTS_PRICE[name];
    ingredients[index].amount += amount;
    let purchasable = true;
    if (totalPrice === BASE_PRICE) {
      purchasable = false;
    }
    this.setState({ ingredients, totalPrice, purchasable });
    console.log(name, amount);
  }

  handelToggleModel = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  handleCheckoutButton = () => {
    this.props.history.push("/checkout");
  };
  render() {
    const { ingredients } = this.state;
    return (
      <>
        <div className="container d-flex flex-md-row flex-column justify-content-center align-items-center">
          <Burger ingredients={ingredients} />
          <Control
            handleMoreLessIngredient={this.handleMoreLessIngredient.bind(this)}
            totalPrice={this.state.totalPrice}
            handelToggleModel={this.handelToggleModel}
            purchasable={this.state.purchasable}
          />
        </div>
        <OrderModal
          modalOpen={this.state.modalOpen}
          ingredients={this.state.ingredients}
          handelToggleModel={this.handelToggleModel}
          totalPrice={this.state.totalPrice}
          handleCheckoutButton={this.handleCheckoutButton}
        ></OrderModal>
      </>
    );
  }
}
