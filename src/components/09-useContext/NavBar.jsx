import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">useContext</a>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/'><a className="nav-link active">Home</a></Link>
                    <Link to='/login'><a className="nav-link active">Login</a></Link>
                    <Link to='/about'><a className="nav-link active">About</a></Link>
                </div>
                </div>
            </div>
        </nav>

    )
}
