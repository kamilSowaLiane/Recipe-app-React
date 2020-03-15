import React from 'react'
import { Link } from 'react-router-dom'

const Recipe = ({recipes}) => {
    const recipeList = recipes.map(recipe => {
        return (
            <div key={recipe.recipe.uri}>
                <h1>{recipe.recipe.label}</h1>
                <p>{Math.floor(recipe.recipe.calories)} calories</p>
                <p>Total meal weight {Math.floor(recipe.recipe.totalWeight)} g</p>
                <p>Servings: {recipe.recipe.yield}</p>
                <img src={recipe.recipe.image} alt=""></img>
                <button>
                    <Link to={{ 
                        pathname: `/ingredients/${recipe.recipe.uri.substring(51, 83)}`,
                        state: { recipe: recipe.recipe.uri.substring(51, 83) }
                    }}>Ingredients</Link>
                </button>
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