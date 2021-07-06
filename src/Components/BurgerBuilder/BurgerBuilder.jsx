import React, { Component } from 'react'
import Burger from './Burger/Burger'


export default class BurgerBuilder extends Component {

  state={
    ingredients:[
      {name:"Salad",amount:0},
      {name:"Meat",amount:0}

    ]
  }
  render() {
    const {ingredients}=this.state;
    return (
      <div className="container">
        <Burger ingredients={ingredients}/>
      </div>
    )
  }
}
