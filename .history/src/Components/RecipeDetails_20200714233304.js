import React, { useContext } from 'react'
import recipeContext from '../context/recipe/recipeContext'

const RecipeDetails = () => {

    const RecipeContext = useContext(recipeContext)
    const { recipe } = RecipeContext

    console.log(recipe)

    const {label, image, url, uri, shareAs, ingredients } = recipe

    return (
        <div style = {{display : 'flex', marginTop: '100px'}}>
            <img src = {image} alt = {label} className = "img-rounded img-responsive" />
            {/* <div className = "row no-gutters">
                <div className = "col-lg-3 col-md-2 col-sm-2">
                    
                </div>
        
            </div> */}
        </div>
    )

}

export default RecipeDetails
