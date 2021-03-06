import React, {useEffect, useState} from 'react'
import { useLocation, Link } from 'react-router-dom'
import '../css/ingredients.css'

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
        
    },[location])

    return (
        <div className="container">
            {activeRecipe.length === 0 ? (
                <div className='ingredients-loading'>Loading <i className='icon-spin6 animate-spin' /></div>
                ) : (
                <div id={activeRecipe.uri} className="ingredients-page">
                    <div>
                        <h1>{activeRecipe.label}</h1>
                        <img src={activeRecipe.image} alt=""></img>
                        <label>Source: <a href={activeRecipe.url} target="_blank" rel="noopener noreferrer">{activeRecipe.source}</a></label>
                        <p>Calories: {Math.floor(activeRecipe.calories)}</p>
                        <p>Total meal weight: {Math.floor(activeRecipe.totalWeight)} g</p>
                        <p>Servings: {activeRecipe.yield}</p>
                        <p>Diet: {activeRecipe.dietLabels.map(diet => (`${diet} `))}</p>
                        <p>Cautions: {activeRecipe.cautions.map(caution => (`${caution} `))}</p>
                        <Link to='/' className='anchor'>Back to recipes</Link>
                    </div>
                    <div>
                        <ul className='ingredients'>
                            <h2>Ingredients</h2>
                            {activeRecipe.ingredientLines.map(ingredient => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                        </ul>
                        <ul>
                            <h2>Health</h2>
                            {activeRecipe.healthLabels.map(health => (
                                <li key={health}>{health}</li>
                            ))}
                        </ul>
                    </div>
                    <ul className='nutrition'>
                        <h2>Nutrition</h2>
                        {Object.keys(activeRecipe.totalNutrients).map((item, i) => (
                            ( i > 1 && i < 6 ) ?
                            <li className='nutrition-fats' key={i}>
                                { activeRecipe.totalNutrients[item].label }: { Math.floor(activeRecipe.totalNutrients[item].quantity) } { activeRecipe.totalNutrients[item].unit }
                            </li>
                            :
                            i < 10 ?
                            <li className='nutrition-primary' key={i}>
                                { activeRecipe.totalNutrients[item].label }: { Math.floor(activeRecipe.totalNutrients[item].quantity) } { activeRecipe.totalNutrients[item].unit }
                            </li>
                            : i < 18 ?
                            <li className='nutrition-chemical' key={i}>
                                { activeRecipe.totalNutrients[item].label }: { Math.floor(activeRecipe.totalNutrients[item].quantity) } { activeRecipe.totalNutrients[item].unit }
                            </li>
                            : i < 31 ?
                            <li className='nutrition-vitamins' key={i}>
                                { activeRecipe.totalNutrients[item].label }: { Math.floor(activeRecipe.totalNutrients[item].quantity) } { activeRecipe.totalNutrients[item].unit }
                            </li>
                            :
                            <li className='nutrition-water' key={i}>
                                { activeRecipe.totalNutrients[item].label }: { Math.floor(activeRecipe.totalNutrients[item].quantity) } { activeRecipe.totalNutrients[item].unit }
                            </li>
                        ))
                        }
                    </ul>
                </div>
                )
            }
        </div>
    )
}

export default Ingredients