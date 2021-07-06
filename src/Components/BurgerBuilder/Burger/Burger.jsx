import React from 'react'
import Ingredient from '../Ingredient/Ingredient'



export default function Burger() {
  return (
    <div>
      <Ingredient  ingredientName="Top"/>
      <Ingredient  ingredientName="Salad"/>
      <Ingredient  ingredientName="Meat"/>
      <Ingredient  ingredientName="Cheese"/>
      <Ingredient  ingredientName="Bottom"/>
    </div>
  )
}
