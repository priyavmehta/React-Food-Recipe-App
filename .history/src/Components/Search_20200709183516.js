import React from 'react'

const Search = () => {
    return (
        <Fragment>
            <h1 onClick = {getData}>Food Searching App</h1>
            <form className = "search-form" onSubmit = {onSubmit}>
                {alert !== "" && <Alert alert = {alert}/>}
                <input type="text" placeholder = "Search Food item" autoComplete = "off" onChange = {changeQuery} value = {query} />
                <input type = "submit" value = "Search" />
            </form>
        </Fragment>
    )
}

export default Search
