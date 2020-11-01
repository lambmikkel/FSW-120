import React from "react"
import {Link} from "react-router-dom"

function Nav(props) {
    return (
        <div className= "nav">
            <ul>
                <li><Link to= "/" className= "link">Home</Link></li>
                <li><Link to= "/about" className= "link">About</Link></li>
                <li><Link to= "/contact" className= "link">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav