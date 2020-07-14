import React, { useContext } from 'react'
import recipeContext from '../context/recipe/recipeContext'
import Recipe from './Recipe'

const Home = () => {

    const RecipeContext = useContext(recipeContext)
    const { navbar_recipes } = RecipeContext

    return (
        <div className = "recipes">
                {
                    navbar_recipes !== [] && (
                        navbar_recipes.map(recipe => <Recipe recipe = {recipe}/>)
                    )
                }
        </div>
    )
}

export default Home
