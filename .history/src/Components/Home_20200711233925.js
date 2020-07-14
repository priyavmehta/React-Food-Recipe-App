import React, { useContext } from 'react'
import recipeContext from '../context/recipe/recipeContext'
import Recipe from './Recipe'

const Home = () => {

    const RecipeContext = useContext(recipeContext)
    const { recipes } = RecipeContext

    return (
        <div className = "recipes">
                {
                    recipes !== [] && (
                        recipes.map(recipe => <Recipe recipe = {recipe}/>)
                    )
                }
        </div>
    )
}

export default Home
