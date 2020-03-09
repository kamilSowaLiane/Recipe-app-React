import React from 'react'

const Ingredients = ({id, recipe}) => {
    console.log(recipe)
    const handleClick = () => {
        document.getElementById(id).style.display = "none"
    }
    const ingredientsList = recipe.recipe.ingredientLines.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })
    return (
        <div id={id} className="ingredients">
            <h1>{recipe.recipe.label}</h1>
            <img src={recipe.recipe.image} alt=""></img>
            Source: <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">{recipe.recipe.source}</a>
            <ul>{ingredientsList}</ul>
            <p>Diet: {recipe.recipe.dietLabels}</p>
            <p>Health: {recipe.recipe.healthLabels}</p>
            <p>Cautions: {recipe.recipe.cautions}</p>
            <p>Calories: {Math.floor(recipe.recipe.calories)}</p>
            <p>Total meal weight: {Math.floor(recipe.recipe.totalWeight)} g</p>
            <button onClick={handleClick}>Back</button>
        </div>
    )
}

export default Ingredients