import React from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const YOUR_APP_ID = 'a232e31f';
  const YOUR_APP_KEY = 'd3cfbfb089b421a6f5135d309faa2604';

  const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

  const getData = async () => {
    const data = await axios.get(url);
    console.log(data)
  }

  return (
    <div className="App">
      <h1>Food Searching App</h1>
    </div>
  );
}

export default App;
