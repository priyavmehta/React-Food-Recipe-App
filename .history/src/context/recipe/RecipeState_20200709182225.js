import React from 'react'
import recipeContext from './recipeContext'

const RecipeState = (props) => {
    return <recipeContext.Provider value = {

    }
    >
        {props.children}
    </recipeContext.Provider>
}

export default RecipeState
