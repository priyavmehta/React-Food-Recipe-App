import React, { useReducer } from 'react'
import recipeContext from './recipeContext'
import recipeReducer from './recipeReducer';

const RecipeState = (props) => {

    const initialState = {
        query : "",
        recipes : "",
        alert : ""
    };

    const [state, dispatch] = useReducer(recipeReducer, initialState);



    return <recipeContext.Provider >
        {props.children}
    </recipeContext.Provider>
}

export default RecipeState
