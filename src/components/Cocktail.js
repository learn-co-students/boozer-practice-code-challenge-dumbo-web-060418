import React from 'react'

const Cocktail = (props) => {
const { name } = props.cocktail
// const { handleClick } = props.cocktail
  return (
    <li onClick={() => props.handleClick(props.cocktail)}>
      {name}
    </li>
  )
}

export default Cocktail
