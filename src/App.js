import React, {useEffect, useState} from 'react'
import './index.css';
import Recipe from './components/Recipe'

function App() {
  const APP_ID = 'f9802810'
  const APP_KEY = 'd893427a6abd4ee178a3b3a98afdeaae'

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  },[])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=cheese&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }
  /*
  const handleClick = (id) => {
    const page = document.getElementById(id)
    page.style.display === "block" ? page.style.display = "none" : page.style.display = "block"
  }
  */
  return (
    <div className="App">
      <Recipe recipes={recipes}/>
    </div>
  );
}

export default App;
