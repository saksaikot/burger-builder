import React from "react";
import { Route } from "react-router-dom";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Checkout from "./BurgerBuilder/Order/Checkout";
import Orders from "./BurgerBuilder/Order/Orders";
import Header from "./Header/Header";

export default function Main() {
  return (
    <div>
      <Header />

      <div className="container">
        <Route path="/order" component={Orders} />
        <Route path="/checkout" component={Checkout} />
        <Route exact path="/" component={BurgerBuilder} />
      </div>
      {/* <BurgerBuilder /> */}
    </div>
  );
}
