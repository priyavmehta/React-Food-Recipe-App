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
                <div style = {{marginLeft : '20px'}}>
                    <p><h2>Dish Name : <span style = {{color: 'red', fontSize : '100%'}}>{label}</span></h2></p>
                    <p><a href = {url} className = "btn btn-success" style = {{color : 'white'}}>Click here for similar dish Details</a></p>
                    <p><a href = {shareAs} className = "btn btn-danger" style = {{color : 'white'}}>Click here for complete Details</a></p>
                </div>
            </div>

            {/* <div>
                {ingredients !== [] && (
                    ingredients.map(ingrdient => <p>{ingrdient}</p>)
                    )
                }
            </div> */}
        </div>
    )

}

export default RecipeDetails
