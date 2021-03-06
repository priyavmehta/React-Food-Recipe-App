import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({icon, title}) => {

    return (
        <nav className = "navbar bg-primary">
            <h3>
                <i className ={icon} style = {{marginRight : 10 + 'px'}}/> {title}
            </h3>
            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                 */}
                <li>Home</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title : "Food App",
    icon : "fab fa-github"
};

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
};

export default Navbar
