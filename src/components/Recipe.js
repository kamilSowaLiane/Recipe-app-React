import React from 'react'

const Recipe = ({recipes}) => {
    const recipeList = recipes.map(recipe => {
        console.log(recipe)
        return (
            <div key={recipe.recipe.uri}>
                <h1>{recipe.recipe.label}</h1>
                <p>{Math.floor(recipe.recipe.calories)} calories</p>
                <p>Total meal weight {Math.floor(recipe.recipe.totalWeight)} g</p>
                <p>{recipe.recipe.healthLabels}</p>
                <p>{recipe.recipe.dietLabels}</p>
                <img src={recipe.recipe.image} alt=""></img>
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