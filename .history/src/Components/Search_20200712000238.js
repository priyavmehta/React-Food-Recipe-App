import React, {Fragment, useContext, useState} from 'react'
import recipeContext from '../context/recipe/recipeContext'
import Recipe from './Recipe'
import Alert from './Alert'

const Search = () => {

    const [query, setQuery] = useState("")

    const RecipeContext = useContext(recipeContext)
    const {getData, search_recipes, alert} = RecipeContext

    const changeQuery = (event) => setQuery(event.target.value)

    const onSubmitQuery = (event) => {
        event.preventDefault()
        getData(query, 0)
        setQuery("")
    }

    return (
        <Fragment>
            <h1 >Food Searching App</h1>
            { alert !== "" && <Alert/>}
            <form className = "search-form" onSubmit = {onSubmitQuery}>
                <input type="text" placeholder = "Search Food item" autoComplete = "off" onChange = {changeQuery} value = {query} />
                <input type = "submit" value = "Search" />
            </form>
            <div className = "recipes">
                {
                    search_recipes !== [] && (
                        search_recipes.map(recipe => <Recipe recipe = {recipe}/>)
                    )
                }
            </div>
        </Fragment>
    )
}

export default Search
