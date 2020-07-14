import React, { useReducer, useState, useEffect } from 'react'
import recipeContext from './recipeContext'
import recipeReducer from './recipeReducer';
import axios from 'axios'
import {SEARCH_RECIPE, SET_ALERT, REMOVE_ALERT, SET_HOME_PAGE} from '../types'

const RecipeState = (props) => {

    const initialState = {
        
        navbar_recipes : [],
        alert : "",
        search_recipes = []
    };

    const home_recipes = []

    const [state, dispatch] = useReducer(recipeReducer, initialState);

    const YOUR_APP_ID = 'a232e31f';
    const YOUR_APP_KEY = 'd3cfbfb089b421a6f5135d309faa2604';

    // useEffect(async () => {
    //     const dosa = await axios.get(`https://api.edamam.com/search?q=dosa&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
    //     const dosa_results = dosa.data.hits;
    //     home_recipes.push(dosa_results[5])
    //     home_recipes.push(dosa_results[9])

    //     const data = await axios.get(`https://api.edamam.com/search?q=pav&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
    //     const results = data.data.hits;
    //     home_recipes.push(results[0])
    //     home_recipes.push(results[1])

    //     dispatch({type : SET_HOME_PAGE, payload : home_recipes})
    //     console.log("All Done")
    //     console.log(state.recipes)
    // }, [])

    const getData = async (text, context) => {
        if (text !== ''){
            const url = `https://api.edamam.com/search?q=${text}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
            const data = await axios.get(url);
            if (!data.data.more){
                return (
                    dispatch({type : SET_ALERT, payload : "Such a food item is not available.."}),
                    setTimeout (() => dispatch({ type : REMOVE_ALERT }), 5000)
                )
            }

            if (context == 0){
                dispatch({type: SEARCH_RECIPE, payload: data.data.hits})
                console.log(state.search_recipes)
            } else {
                dispatch({type: NAVBAR_SEARCH_RECIPE, payload: data.data.hits})
                console.log(state.search_recipes)
            }
            
        } else {
            dispatch ({type : SET_ALERT, payload: "Please enter something"})
            setTimeout (() => dispatch({ type : REMOVE_ALERT }), 5000)
        }
        
    }

    const getIndian = async () => {
        
    }

    return <recipeContext.Provider value = {{
            getData,
            navbar_recipes: state.navbar_recipes,
            alert : state.alert,
            search_recipes : state.search_recipes
        }
    }
    >
        {props.children}
    </recipeContext.Provider>
}

export default RecipeState
