import React from "react";
import { Route } from "react-router-dom";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Checkout from "./BurgerBuilder/Order/Checkout";
import Order from "./BurgerBuilder/Order/Order";
import Header from "./Header/Header";

export default function Main() {
  return (
    <div>
      <Header />

      <div className="container">
        <Route path="/order" component={Order} />
        <Route path="/checkout" component={Checkout} />
        <Route exact path="/" component={BurgerBuilder} />
      </div>
      {/* <BurgerBuilder /> */}
    </div>
  );
}
