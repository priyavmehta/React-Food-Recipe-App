import React, {Fragment, useContext, useState} from 'react'
import recipeContext from '../context/recipe/recipeContext'
import Recipe from './Recipe'

const Search = () => {

    const [query, setQuery] = useState("")

    const RecipeContext = useContext(recipeContext)
    const {onSubmit, changeQuery,query,recipes} = RecipeContext

    return (
        <Fragment>
            <h1 >Food Searching App</h1>
            <form className = "search-form" onSubmit = {onSubmit}>
                {/* {alert !== "" && <Alert alert = {alert}/>} */}
                <input type="text" placeholder = "Search Food item" autoComplete = "off" onChange = {changeQuery} value = {query} />
                <input type = "submit" value = "Search" />
            </form>
            <div className = "recipes">
                {
                recipes !== [] && (
                recipes.map(recipe => <Recipe recipe = {recipe}/>)
                )
                }
            </div>
        </Fragment>
    )
}

export default Search
