import React, { useState } from 'react'

const Form = ({ getRecipes }) => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        const filter = document.getElementsByClassName('filter')[0]
        if (filter.style.display === 'block') {
            filter.style.display = 'none'
            setIsActive(false)
        } else {
            filter.style.display = 'block'
            setIsActive(true)
        }
    }
    return(
        <form onSubmit={getRecipes}>
            <label>
                Query
                <input type='text' name='recipeName'/>
            </label>
            <button type='button' onClick={handleClick}>{isActive ? 'Hide filter' : 'Show filter'}</button>
            <div className='filter'>
                <label>
                    Hits
                    <input type='text' name='hits'/>
                </label>
                <label>
                    Calories
                    <input type='text' name='calories'/>
                </label>
                <label>
                    Diet
                    <select name="diet" defaultValue=''>
                        <option value="">None</option>
                        <option value="balanced">Balanced</option>
                        <option value="high-protein">High protein</option>
                        <option value="high-fiber">High fiber</option>
                        <option value="low-fat">Low fat</option>
                        <option value="low-carb">Low carb</option>
                        <option value="low-sodium">Low sodium</option>
                    </select>
                </label>
                <label>
                    <input type="checkbox" value='alcohol-free' name='health'/>
                    Alcohol-free
                </label>
                <label>
                    <input type="checkbox" value='peanut-free' name='health'/>
                    Peanut-free
                </label>
                <label>
                    <input type="checkbox" value='tree-nut-free' name='health'/>
                    Tree nuts free
                </label>
                <label>
                    <input type="checkbox" value='sugar-conscious' name='health'/>
                    Sugar conscious
                </label>
                <label>
                    <input type="checkbox" value='vegetarian' name='health'/>
                    Vegetarian
                </label>
                <label>
                    <input type="checkbox" value='vegan' name='health'/>
                    Vegan
                </label>
                <label>
                    Maximum number of ingredients
                    <input type='text' name='ingr'/>
                </label>
                <label>
                    excluded
                    <input type='text' name='excluded'/>
                </label>
            </div>
            <button>Search</button>
        </form>
    )
}

export default Form