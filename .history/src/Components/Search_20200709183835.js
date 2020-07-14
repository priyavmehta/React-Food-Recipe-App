import React from 'react'

const Search = (props) => {
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
