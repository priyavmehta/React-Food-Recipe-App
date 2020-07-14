import React from 'react'
import recipeContext from './recipeContext'

const RecipeState = (props) => {
    return <recipeContext.Provider >
        {props.children}
    </recipeContext.Provider>
}

export default RecipeState
