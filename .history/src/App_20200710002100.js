import React, { useState } from 'react';
import './App.css';
import RecipeState from './context/recipe/RecipeState';
import Search from './Components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

  return (
    <RecipeState>
      <div className="App">
        <Search/>
      </div>
    </RecipeState>
  );
}

export default App;
