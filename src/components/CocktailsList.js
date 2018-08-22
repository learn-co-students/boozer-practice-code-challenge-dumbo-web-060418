import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {

  genCocktailComponent(cocktails) {
  return cocktails.map((cocktail) =>  {return <Cocktail key={cocktail.name} cocktail={cocktail} displayCocktail={this.props.displayCocktail} />})
  }

  render(){
    return (
      <div id="cocktail-list">
        {this.genCocktailComponent(this.props.cocktails)}
      </div>
    )
  }
}

export default CocktailsList
