import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Control from "./Control/Control";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { name: "Salad", amount: 0 },
      { name: "Meat", amount: 0 },
    ],
  };
  render() {
    const { ingredients } = this.state;
    return (
      <div className="container d-flex flex-md-row flex-column justify-content-center align-items-center">
        <Burger ingredients={ingredients} />
        <Control />
      </div>
    );
  }
}
