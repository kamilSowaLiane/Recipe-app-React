import React, {useEffect, useState} from 'react';
import './index.css';

function App() {
  const APP_ID = 'f9802810'
  const APP_KEY = 'd893427a6abd4ee178a3b3a98afdeaae'

  const [request, setRequest] = useState('')

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}"`

  useEffect(() => {
    getRecipes()
  },[])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">
      <h1 className="Greetings">Hello</h1>
    </div>
  );
}

export default App;
