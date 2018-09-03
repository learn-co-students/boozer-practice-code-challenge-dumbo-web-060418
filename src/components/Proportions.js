import React, { Component } from 'react'


export default class Proportions extends Component {
   render() {
     return (
          <div className="container">
            <p>Ingredient Name<br/>
            <input
              type="text"
              name="ingredientName"/>
            </p>

            <p>Quantity<br/>
            <input type="text" name="amount"/>
            </p>
          </div>
     )
   }
 };
