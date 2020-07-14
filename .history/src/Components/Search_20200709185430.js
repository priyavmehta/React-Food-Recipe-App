import React, {Fragment, useContext} from 'react'
import recipeContext from '../context/recipe/recipeContext'

const Search = () => {

    const RecipeContext = useContext(recipeContext)
    const {onSubmit, changeQuery,query} = RecipeContext

    return (
        <Fragment>
            <h1 >Food Searching App</h1>
            <form className = "search-form" onSubmit = {props.onSubmit}>
                {/* {alert !== "" && <Alert alert = {alert}/>} */}
                <input type="text" placeholder = "Search Food item" autoComplete = "off" onChange = {props.changeQuery} value = {props.query} />
                <input type = "submit" value = "Search" />
            </form>
        </Fragment>
    )
}

export default Search
