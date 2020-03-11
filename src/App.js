import React, {useEffect, useState} from 'react'
import './index.css';
import Recipe from './components/Recipe'
import Form from './components/Form'

function App() {
  const APP_ID = 'f9802810'
  const APP_KEY = 'd893427a6abd4ee178a3b3a98afdeaae'

  const [recipes, setRecipes] = useState([])

 

  const getRecipes = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault()
    const response = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3`)
    const data = await response.json()
    setRecipes(data.hits)
  }
  return (
    <div className="App">
      <Form getRecipes={getRecipes} />
      <Recipe recipes={recipes}/>
    </div>
  );
}

export default App;
