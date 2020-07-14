import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({icon, title}) => {

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-dark fixed-top">
            <a className="navbar-brand"><i className="fas fa-utensils"></i></a>
            <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
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
                <form className="form-inline ml-3">
                    <div className="input-group">
                        <input type="text" className="form-control " placeholder="Search" />
                        <button type="submit"></button><i className="fa fa-search"></i>
                    </div>

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
