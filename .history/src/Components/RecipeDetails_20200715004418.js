import React, { useContext } from 'react'
import recipeContext from '../context/recipe/recipeContext'

const RecipeDetails = () => {

    const RecipeContext = useContext(recipeContext)
    const { recipe } = RecipeContext

    console.log(recipe)

    const {label, image, url, uri, shareAs, ingredients } = recipe

    return (
        <div style = {{display : 'flex', marginTop: '100px'}} >
            <div className = "row">
                <div className = "col-md-6 col-sm-1">
                    <img src = {image} alt = {label} className = "rounded float-left img-fluid" style = {{maxWidth : "100%", height : 'auto'}} />
                </div>
            </div>
            {/* <img src = {image} alt = {label} className = "rounded float-left img-fluid" style = {{maxWidth : "100%", height : 'auto'}} /> */}
            {/* <div className = "row no-gutters">
                <div className = "col-lg-3 col-md-2 col-sm-2">
                    
                </div>
        
            </div> */}
        </div>
    )

}

export default RecipeDetails
