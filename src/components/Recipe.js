import React from 'react'

const Recipe = ({recipes}) => {
    const recipeList = recipes.map(recipe => {
        console.log(recipe)
        return (
            <div key={recipe.recipe.label}>
                <h1>{recipe.recipe.label}</h1>
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