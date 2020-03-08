import React from 'react'
import Ingredients from './Ingredients'

const Recipe = ({recipes, handleClick}) => {
    const recipeList = recipes.map(recipe => {
        return (
            <div key={recipe.recipe.uri}>
                <h1>{recipe.recipe.label}</h1>
                <p>{Math.floor(recipe.recipe.calories)} calories</p>
                <p>Total meal weight {Math.floor(recipe.recipe.totalWeight)} g</p>
                <p>{recipe.recipe.healthLabels}</p>
                <p>{recipe.recipe.dietLabels}</p>
                <img src={recipe.recipe.image} alt=""></img>
                <button onClick={() => handleClick(recipe.recipe.uri)}>Ingredients</button>
                <Ingredients 
                    id={recipe.recipe.uri}
                    recipe={recipe}
                />
            </div>
        )
    })
    return (
        <div>
            {recipeList}
        </div>
    )
}

export default Recipe