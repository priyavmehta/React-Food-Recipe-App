import React from 'react';
import './App.css';
import RecipeState from './context/recipe/RecipeState';
import Search from './Components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import RecipeDetails from './Components/RecipeDetails';

const App = () => {

  return (
    <RecipeState>
      <Router>
        <div className="App">
          <Navbar />
          <div className = "container">
            <Switch>
              <Route exact path = '/' component = {Home} />
              <Route exact path = '/search' component = {Search} />
              <Route exact path = '/recipe/:label' component = {RecipeDetails} />
            </Switch>
          </div>
        </div>
      </Router>
    </RecipeState>
  );
}

export default App;
