import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

const APP_ID = 'f9802810'
const APP_KEY = 'd893427a6abd4ee178a3b3a98afdeaae'

const Ingredients = () => {

    const [activeRecipe, setActiveRecipe] = useState([])
    const location = useLocation()

    useEffect(() => {
        let ignore = false
        async function fetchData() {
            const recipe = location.state.recipe
            const request = await fetch(`https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            const result = await request.json()
            if (!ignore) setActiveRecipe(result.hits[0].recipe)
        }
        fetchData()
        return () => { ignore = true; }
        
    },[location.state.recipe])
    
    console.log(activeRecipe)
    
    
    /*
    const ingredientsList = activeRecipe.ingredientLines.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })
    */
    return (
        <div id={activeRecipe.uri} className="ingredients">
            <h1>{activeRecipe.label}</h1>
            <img src={activeRecipe.image} alt=""></img>
            Source: <a href={activeRecipe.url} target="_blank" rel="noopener noreferrer">{activeRecipe.source}</a>
            <p>Diet: {activeRecipe.dietLabels}</p>
            <p>Health: {activeRecipe.healthLabels}</p>
            <p>Cautions: {activeRecipe.cautions}</p>
            <p>Calories: {Math.floor(activeRecipe.calories)}</p>
            <p>Total meal weight: {Math.floor(activeRecipe.totalWeight)} g</p>
            <button>Back</button>
        </div>
    )
}

export default Ingredients