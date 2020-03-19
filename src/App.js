import React, { useState } from 'react'
import './index.css';
import Recipe from './components/Recipe'
import Form from './components/Form'

function App() {
  const APP_ID = 'f9802810'
  const APP_KEY = 'd893427a6abd4ee178a3b3a98afdeaae'

  const [recipes, setRecipes] = useState([])

 

  const getRecipes = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    var url = `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`
    
    if (e.target.elements.hits.value.length > 0 && e.target.elements.hits.value < 100) {
      const hits = e.target.elements.hits.value
      url += `&from=0&to=${hits}`
    }
    if (e.target.elements.calories.value.length > 1 && e.target.calories.value > 10) {
      const calories = e.target.elements.calories.value
      url += `&calories=${calories}`
    }
    if (e.target.elements.diet.value.length > 5) {
      const diet = e.target.elements.diet.value
      url += `&diet=${diet}`
    }
    
    for (var i = 0; i < e.target.elements.health.length; i++) {
      if (e.target.elements.health[i].checked) {
        const health = e.target.elements.health[i].value
        url += `&health=${health}`
      }
    }
    if (e.target.elements.ingr.value.length > 0 && e.target.elements.ingr.value > 1) {
      const ingr = e.target.elements.ingr.value
      url += `&ingr=${ingr}`
    }
    if (e.target.elements.excluded.value.length > 2) {
      const excluded = e.target.elements.excluded.value
      url += `&excluded=${excluded}`
    }
    
    e.preventDefault()
    const response = await fetch(url)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(url)
  }
  return (
    <div className="App">
      <header><span><i className="icon-book" />Recipe search app</span></header>
      <Form getRecipes={getRecipes} />
      <Recipe recipes={recipes}/>
    </div>
  );
}

export default App;
