import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import Recipe from './Components/Recipe';
import Alert from './Components/Alert';

const App = () => {

  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [alert, setalert] = useState("")
  //const [show, setShow] = u

  const YOUR_APP_ID = 'a232e31f';
  const YOUR_APP_KEY = 'd3cfbfb089b421a6f5135d309faa2604';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

  const getData = async () => {
    if (query !== ''){
      const data = await axios.get(url);
      setRecipes(data.data.hits)
      console.log(data)
      setQuery("")
    } else {
      setalert("Please enter some text")
    }
    
  }

  const onSubmit = (event) =>{
    event.preventDefault()
    getData()
  }

  const changeQuery = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className="App">
      <h1 onClick = {getData}>Food Searching App</h1>
      <form className = "search-form" onSubmit = {onSubmit}>
        <Alert alert = {alert}/>
        <input type="text" placeholder = "Search Food item" autoComplete = "off" onChange = {changeQuery} value = {query} />
        <input type = "submit" value = "Search" />
      </form>

      <div className = "recipes">
        {
          recipes !== [] && (
          recipes.map(recipe => <Recipe recipe = {recipe}/>)
          )
        }
      </div>
    </div>
  );
}

export default App;
