import React, { useReducer, useState } from 'react'
import recipeContext from './recipeContext'
import recipeReducer from './recipeReducer';
import axios from 'axios'
import {SEARCH_RECIPE} from '../types'

const RecipeState = (props) => {

    const initialState = {
        recipes : [],
        alert : ""
    };

    const [state, dispatch] = useReducer(recipeReducer, initialState);
    //const [alert, setalert] = useState("")

    const YOUR_APP_ID = 'a232e31f';
    const YOUR_APP_KEY = 'd3cfbfb089b421a6f5135d309faa2604';

    const getData = async (text) => {
        if (text !== ''){
            const url = `https://api.edamam.com/search?q=${text}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
            const data = await axios.get(url);
            // if (!data.data.more){
            //     return setalert("Such a food item does not exist")
            // }
            dispatch({type: SEARCH_RECIPE, payload: data.data.hits})
            //setRecipes(data.data.hits)
            console.log(recipes)
            //setQuery("")
        }
        //setalert("")
        // } else {
        // setalert("Please enter some text")
        // }
        
    }

    return <recipeContext.Provider value = {{
            getData,
            recipes
        }
    }
    >
        {props.children}
    </recipeContext.Provider>
}

export default RecipeState
