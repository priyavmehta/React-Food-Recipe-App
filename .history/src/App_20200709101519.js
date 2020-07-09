import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

const App = () => {

  const [query, setQuery] = useState("")

  const YOUR_APP_ID = 'a232e31f';
  const YOUR_APP_KEY = 'd3cfbfb089b421a6f5135d309faa2604';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

  const getData = async () => {
    const data = await axios.get(url);
    console.log(data)
    setQuery("")
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
        <input type="text" placeholder = "Search Food item" autoComplete = "off" onChange = {changeQuery} value = {query} />
        <input type = "submit" value = "Search" />
      </form>
    </div>
  );
}

export default App;
