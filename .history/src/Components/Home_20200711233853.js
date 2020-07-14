import React, { useContext } from 'react'
import recipeContext from '../context/recipe/recipeContext'

const Home = () => {

    const RecipeContext = useContext(recipeContext)
    const { recipes } = RecipeContext

    return (
        <div>
            HEllo
        </div>
    )
}

export default Home
