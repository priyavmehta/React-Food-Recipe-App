import React, { useState, useContext } from 'react'
import RecipeDetails from './RecipeDetails'
import { Link } from 'react-router-dom'
import recipeContext from '../context/recipe/recipeContext'

const Recipe = ({recipe}) => {

    const RecipeContext = useContext(recipeContext);
    const { setRecipe } = RecipeContext

    const { label, image, url, ingredients, shareAs, uri} = recipe.recipe

    const Recipe = {
        label : label,
        image : image,
        url : url,
        ingredients : ingredients,
        shareAs : shareAs,
        uri : uri
    }

    return (
        <div className = "recipe">
            <h2>{label}</h2>
            <img src = {image} alt = {label} />
            <a href = {url} target = "_blank" rel = "noopener noreferrer">URL</a>
            <a href = {shareAs} target = "_blank" rel = "noopener noreferrer">Share As</a>
            <a href = {uri} target = "_blank" rel = "noopener noreferrer">URI</a>
            <Link to = {`/recipe/${label}`} className = "btn btn-primary" onClick = {() => setRecipe(Recipe)}>More</Link>
        </div>
    )
}

export default Recipe
