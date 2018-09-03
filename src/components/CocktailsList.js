import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {

cocktailMap = () => this.props.cocktails.map(cocktail => {
  return <Cocktail
    key={cocktail.id}
     handleClick={this.props.handleClick} cocktail={cocktail}/>
})

  render(){
    
    return (
      <div id="cocktail-list">
        {this.cocktailMap()}
      </div>
    )
  }
}

export default CocktailsList
