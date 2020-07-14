import React, { useState } from 'react';
import './App.css';
import RecipeState from './context/recipe/RecipeState';
import Search from './Components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';

const App = () => {

  return (
    <RecipeState>
      <Router>
      
        <div className="App">
        <Navbar />
          <Search/>
        </div>
      </Router>
    </RecipeState>
  );
}

export default App;
