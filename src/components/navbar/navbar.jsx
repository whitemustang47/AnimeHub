import React from "react"
import ReactDOM from "react-dom"
import "./navbar.css"
import logo from "../../asset/logo.png"
export default function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <img className="image"
                    src={logo}/>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>

        </div>
    )
}
