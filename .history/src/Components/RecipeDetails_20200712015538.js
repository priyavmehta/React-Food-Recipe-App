import React, { useContext } from 'react'
import recipeContext from '../context/recipe/recipeContext'

const RecipeDetails = () => {

    const RecipeContext = useContext(recipeContext)
    const { recipe } = RecipeContext

    console.log(recipe.image)

    const {label,image } = recipe

    return (
        <div>
            <img src = {image} alt = {label} />
        </div>
    )

}

export default RecipeDetails
