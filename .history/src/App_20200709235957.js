import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import Recipe from './Components/Recipe';
import Alert from './Components/Alert';
import RecipeState from './context/recipe/RecipeState';
import Search from './Components/Search';

const App = () => {

  return (
    <RecipeState>
      <div className="App">
        
        <Search/>
        <Alert/>
      </div>
    </RecipeState>
  );
}

export default App;
