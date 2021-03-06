import React, { useReducer, useState } from 'react'
import recipeContext from './recipeContext'
import recipeReducer from './recipeReducer';
import axios from 'axios'
import {SEARCH_RECIPE, SET_ALERT} from '../types'

const RecipeState = (props) => {

    const initialState = {
        recipes : [],
        alert : ""
    };

    const [state, dispatch] = useReducer(recipeReducer, initialState);

    const YOUR_APP_ID = 'a232e31f';
    const YOUR_APP_KEY = 'd3cfbfb089b421a6f5135d309faa2604';

    const getData = async (text) => {
        if (text !== ''){
            const url = `https://api.edamam.com/search?q=${text}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
            const data = await axios.get(url);
            if (!data.data.more){
                return (
                    dispatch({type : SET_ALERT, payload : "Such a food item is not available.."}),
                    setTimeout (() => dispatch({ type : REMOVE_ALERT }), 5000)
                )
            }
            dispatch({type: SEARCH_RECIPE, payload: data.data.hits})
            console.log(state.recipes)
        } else {
            dispatch ({type : SET_ALERT, payload: "Please enter something"})
            setTimeout (() => dispatch({ type : REMOVE_ALERT }), 5000)
        }
        
    }

    return <recipeContext.Provider value = {{
            getData,
            recipes: state.recipes,
            alert : state.alert
        }
    }
    >
        {props.children}
    </recipeContext.Provider>
}

export default RecipeState
