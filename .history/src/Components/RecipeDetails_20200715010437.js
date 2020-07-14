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
                
                <img src = {image} alt = {label} className = "rounded float-left img-fluid" style = {{maxWidth : "100%", height : 'auto', marginLeft : '20px', marginRight: '50px'}} />
                <div>
                    <p><h2>Dish Name : <span style = {{color: 'red', fontSize : '100%'}}>{label}</span></h2></p>
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
