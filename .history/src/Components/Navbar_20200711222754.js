import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({icon, title}) => {

    return (
        <nav class="navbar navbar-expand-md navbar-light bg-dark fixed-top">
            <a class="navbar-brand"><img src="img/dish.png" /></a>
            <button type="button" class="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
                <span class="navbar-toggler-icon"></span>
            </button>
             <div class="collapse navbar-collapse justify-content-between" id="nav">
                {/* <ul class="navbar-nav">
                    <li class="nav-item" >
                        <a class="nav-link text-light font-weight-bold px-3" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light font-weight-bold px-3" href="#">ABOUT US</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light font-weight-bold px-3" href="#">CONTACT</a>
                    </li>
                </ul>*/}
                <form class="form-inline ml-3">
                    <div class="input-group">
                        <input type="text" class="form-control " placeholder="Search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
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
