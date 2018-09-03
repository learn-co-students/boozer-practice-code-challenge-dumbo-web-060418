import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {

  state = {
    cocktails: [],
    displayCocktail : {}
  }

  componentDidMount(){
    this.fetchCocktails()
  }

  fetchCocktails = () => {
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails').then(resp => resp.json()).then(resp => this.setState({
      cocktails: resp
    }))
  }

  handleClick = (cocktail) => {
    this.setState({
      displayCocktail: cocktail
    })

  }




  render(){
    // console.log(this.state.cocktails);
    return (
      <div className="container">
        <CocktailsList handleClick={this.handleClick} cocktails={this.state.cocktails}/>
        <CocktailDisplay displayCocktail={this.state.displayCocktail} />
        <Form />
      </div>
    )
  }
}

export default CocktailsContainer
