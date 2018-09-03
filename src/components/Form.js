import React, { Component } from 'react'
import Proportions from './Proportions'


class Form extends Component {

  state = {
    proportionsChildren : 0,
      cocktailName: '',
      cocktailDescription: '',
      cocktailInstructions: '',
      ingredientName: '',
      proportionsAmount: ''

    }

  fetchPostCocktailDB = () => {
    console.log("Here");
    // fetch(`https://react-boozer-backend.herokuapp.com/api/v1/cocktails`, {
    //     method: "POST",
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //       name: this.state.cocktailName,
    //       description: this.state.cocktailDescription,
    //       instructions: this.state.cocktailInstructions,
    //       source: "Quinn"
    //     })
    //   })
    // .then(resp => resp.json())
    // .then(console.log)
  }

  fetchPostHandle = (event) => {

    event.preventDefault()

    const { cocktailName, cocktailDescription, cocktailInstructions, ingredientName, proportionsAmount } = this.state;


    if (cocktailName && cocktailDescription && cocktailInstructions) {
        this.fetchPostCocktailDB()
    } else if (ingredientName) {

    } else if (proportionsAmount) {

    }

    // switch (this.state) {
    //   case "cocktailName":
    //     console.log("Name")
    //
    //     break
    //   case "description":
    //     console.log("Description")
    //     break
    //   case "instructions":
    //     console.log("Instructions")
    //     break
    //   case "ingredientName":
    //     console.log("ingredientName")
    //     break
    //   case "quantity":
    //     console.log("quantity")
    //     break
    //   default:
    //   console.log('Sorry, no match');
    // }
  }


handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

onAddChild = (event) => {
  event.preventDefault()
  this.setState(prevState => {
    return {
      proportionsChildren: prevState.proportionsChildren += 1
    }
  })
}


  render(){

    const ingredient = []

    for (let i = 0; i < this.state.proportionsChildren; i += 1) {
      ingredient.push(<Proportions onChange={(event) => this.handleChange(event)} key={i} number={i}/>)

      // this.setState(prevState => {
      //   ingredient: prevState.ingredient, ingredient
      // })

    }

    return (
      <form onChange={(event) => this.handleChange(event)}>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input
          type="text"
          value={this.state.cocktailName}
          name="cocktailName"/>

        <p>Description</p>
        <input
          type="text"
          value={this.state.cocktailDescription} name="cocktailDescription"/>

        <p>Instructions</p>
        <input
          type="text"
          value={this.state.cocktailInstructions}
          name="cocktailInstructions"/>

        <h3>Proportions</h3>
        {ingredient}

        <p><button onClick={(event) => this.onAddChild(event)}> + </button></p>

        <input onClick={(event) => this.fetchPostHandle(event)} type="submit"/>
      </form>
    )
  }
}

export default Form
