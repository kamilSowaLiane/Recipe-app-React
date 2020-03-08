import React from 'react'

const Ingredients = ({id, recipe}) => {
    console.log(recipe)
    const ingredientsList = recipe.recipe.ingredientLines.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })
    return (
        <div id={id} className="ingredients">
            <h1>{recipe.recipe.label}</h1>
            <ul>{ingredientsList}</ul>
        </div>
    )
}

export default Ingredients