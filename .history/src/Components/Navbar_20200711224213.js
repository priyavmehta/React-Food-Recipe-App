import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({icon, title}) => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
            <a className="navbar-brand"><i className="fas fa-utensils"></i></a>
            <button type="button" className="navbar-toggler bg-primary" data-toggle="collapse" data-target="#nav">
                <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse justify-content-between" id="nav">
                <ul className="navbar-nav">
                    <li className="nav-item" >
                        <a className="nav-link text-light font-weight-bold px-3" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light font-weight-bold px-3" href="#">ABOUT US</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light font-weight-bold px-3" href="#">CONTACT</a>
                    </li>
                </ul>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>

            </div> 

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
