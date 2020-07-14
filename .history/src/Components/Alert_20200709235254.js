import React, { useContext } from 'react'
import recipeContext from '../context/recipe/recipeContext'

const Alert = () => {

    const RecipeContext = useContext(recipeContext);
    const { alert } = RecipeContext

    return (
        <div className = "alert">
            <h3>{alert}</h3>
        </div>
    )
}

export default Alert
