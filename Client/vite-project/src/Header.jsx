import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <h1 className="logo">Room Manager</h1>
                <ul className="nav-menu">

                    <li><Link to="/allroom" className="nav-link">All Rooms</Link></li>
                    <li><Link to="/addroom" className="nav-link">Add Room</Link></li>
                    <li><Link to="/allotroom" className="nav-link">Allot Room</Link></li>
                    <li><Link to="/searchroom" className="nav-link">Search Room</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
