import React from 'react'

const Recipe = ({recipes}) => {
    const recipeList = recipes.map(recipe => {
        return (
            <div>
                <h1>Title</h1>
                <p>Calories</p>
                <img src="" alt=""></img>
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