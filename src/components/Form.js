import React, { Component } from 'react'

class Form extends Component {
  render(){
    return (
      <form onSubmit={this.props.submit}>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input value={this.props.nameState} onChange={this.props.name} type="text"/>

        <p>Description</p>
        <input  value={this.props.descriptionState} onChange={this.props.description} type="text"/>

        <p>Instructions</p>
        <input value={this.props.instructionsState} onChange={this.props.instructions} type="text"/>



        <input  type="submit"/>

      </form>
    )
  }
}

export default Form
