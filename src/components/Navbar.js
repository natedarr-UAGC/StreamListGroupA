import {Link} from "react-router-dom";
import {FaFilm} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
    return (
        <nav className = "navbar">
            

            <ul className = "nav-links">
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/movies">Movies</Link>
                </li>
            </ul>
                
            <Link to = "/" className = "logo"><FaFilm /><b>StreamList</b></Link>
            
            <ul className = "nav-links">
                <li>
                    <Link to = "/cart">Cart</Link>
                </li>
                <li>
                    <Link to = "/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;