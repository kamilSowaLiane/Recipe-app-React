import React from 'react'
import { Link } from 'react-router-dom'
import '../css/recipe.css'

const Recipe = ({recipes}) => {
    const recipeList = recipes.map(recipe => {
        return (
            <div className='recipe' key={recipe.recipe.uri}>
                <h2>
                    {recipe.recipe.label.length < 21 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0, 21)}...`}
                </h2>
                <p>by {recipe.recipe.source}</p>
                <img src={recipe.recipe.image} alt=""></img>
                <Link to={{ 
                    pathname: `/ingredients/${recipe.recipe.uri.substring(51, 83)}`,
                    state: { recipe: recipe.recipe.uri.substring(51, 83) }
                }} className='anchor'>View ingredients & more</Link>
            </div>
        )
    })
const result = recipeList.length > 1 ? recipeList : 
    <div className='info'>
        <p>Nothing found yet.</p>
        <p>Start searching for recipes by typing in any ingredient name e.g. cheese, chicken or meal name e.g. spaghetti. 
            Use filters to specify your searching. Have a good meal!
        </p>
    </div>
    return (
        <div className='results'>
            {result}
        </div>
    )
}

export default Recipe