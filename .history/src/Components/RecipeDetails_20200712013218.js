import React, { useContext } from 'react'
import recipeContext from '../context/recipe/recipeContext'

const RecipeDetails = () => {

    const RecipeContext = useContext(recipeContext)
    const { recipe } = RecipeContext

    const { label } = recipe.recipe

    return (
        <div>
            {label}
        </div>
    )

}

export default RecipeDetails
