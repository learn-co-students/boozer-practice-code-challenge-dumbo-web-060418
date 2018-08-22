import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {

  state = {
    cocktails: [],
    current_cocktail: {},
    name: '',
    description: '',
    instructions: ''
  }

  handleSubmit = () => {
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails', {
      "method": "POST",
      "body": JSON.stringify({name: this.state.name, description: this.state.description}),
      "headers": {
        "Accepts": 'application/json',
        "Content-Type": 'application/json'
      }
    }).then(r => r.json())
    .then(json =>
      console.log(json)
    )
  }

  nameChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  descriptionChange = e => {
    this.setState({
      description: e.target.value
    })
  }

  instructionsChange = e => {
    this.setState({
      description: e.target.value
    })
  }



  handleCurrentCocktail = cocktail => {
    this.setState({
      current_cocktail: cocktail
    })
  }

  componentDidMount() {
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
    .then(r => r.json())
    .then(json =>
      this.setState({
        cocktails: json.map(cocktail => cocktail)
      })

    )
  }

  render(){
    console.log(this.state.name)
    return (
      <div className="container">
        <CocktailsList displayCocktail={this.handleCurrentCocktail}  cocktails={this.state.cocktails}/>
        <CocktailDisplay  cocktail={this.state.current_cocktail} />
        <Form submit={this.handleSubmit} nameState={this.state.name} instructionsState={this.state.instructions} descriptionState={this.state.description}  name={this.nameChange} instructions={this.instructionsChange} description={this.descriptionChange}/>
      </div>
    )
  }
}

export default CocktailsContainer
