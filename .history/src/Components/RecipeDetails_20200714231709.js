import React, { useContext } from 'react'
import recipeContext from '../context/recipe/recipeContext'

const RecipeDetails = () => {

    const RecipeContext = useContext(recipeContext)
    const { recipe } = RecipeContext

    console.log(recipe)

    const {label, image, url, uri, shareAs, ingredients } = recipe

    return (
        <div style = {{display : 'flex', marginTop: '100px'}}>
            <img src = {image} alt = {label} />
            <p>{label}</p>
            <p>{url}</p>
            <p>{uri}</p>
            <p>{shareAs}</p>
            
        </div>
    )

}

export default RecipeDetails
