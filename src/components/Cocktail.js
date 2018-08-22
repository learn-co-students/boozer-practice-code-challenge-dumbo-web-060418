import React from 'react'
import CocktailDisplay from './CocktailDisplay'

const Cocktail = (props) => {

  const displayCocktail = () => {
    return props.displayCocktail(props.cocktail)
  }

  return (
    <li><a onClick={displayCocktail} href="#">{props.cocktail.name}</a></li>
  )
}

export default Cocktail
