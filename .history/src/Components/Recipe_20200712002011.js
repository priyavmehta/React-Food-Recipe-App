import React, { useState } from 'react'
import RecipeDetails from './RecipeDetails'
import { Link } from 'react-router-dom'

const Recipe = ({recipe}) => {

    const [show, setShow] = useState(false)

    const { label, image, url, ingredients, shareAs, uri} = recipe.recipe
    return (
        <div className = "recipe">
            <h2>{label}</h2>
            <img src = {image} alt = {label} />
            <a href = {url} target = "_blank" rel = "noopener noreferrer">URL</a>
            <a href = {shareAs} target = "_blank" rel = "noopener noreferrer">Share As</a>
            <a href = {uri} target = "_blank" rel = "noopener noreferrer">URI</a>
            <Link to = {`/recipe/${label}`} >More</Link>
            <button className = "btn btn-primary" onClick = {() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients = {ingredients} />}
        </div>
    )
}

export default Recipe
