import React, { useReducer, useState } from 'react'
import recipeContext from './recipeContext'
import recipeReducer from './recipeReducer';
import axios from 'axios'

const RecipeState = (props) => {

    const initialState = {
        query : "",
        recipes : "",
        alert : ""
    };

    const [state, dispatch] = useReducer(recipeReducer, initialState);

    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([])
    //const [alert, setalert] = useState("")

    const YOUR_APP_ID = 'a232e31f';
    const YOUR_APP_KEY = 'd3cfbfb089b421a6f5135d309faa2604';

    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

    const getData = async () => {
        if (query !== ''){
        const data = await axios.get(url);
        // if (!data.data.more){
        //     return setalert("Such a food item does not exist")
        // }
        setRecipes(data.data.hits)
        console.log(data)
        setQuery("")
        }
        //setalert("")
        // } else {
        // setalert("Please enter some text")
        // }
        
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        getData()
    }

    const changeQuery = (event) => {
        setQuery(event.target.value)
    }

    return <recipeContext.Provider>
        {props.children}
    </recipeContext.Provider>
}

export default RecipeState
