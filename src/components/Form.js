import React from 'react'

const Form = ({ getRecipes }) => {
    return(
        <form onSubmit={getRecipes}>
            <input type='text' name='recipeName'/>
            <button>Search</button>
        </form>
    )
}

export default Form