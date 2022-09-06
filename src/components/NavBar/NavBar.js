import CartWidget from "./CartWidget.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = ()=> {
    return(
        <header>
            <nav className="navBar">
                <div>
                    <Link to='/' className="headerBrandName"><FontAwesomeIcon className="headerBrandIcon" icon={faPaw} /> Patitas</Link>
                </div>
                <div>
                    <ul className="menuItemList">
                        <li className="menuItem">HOME</li>
                        <li className="menuItem">PRODUCTOS</li>
                        <li className="menuItem">NOSOTROS</li>
                        <li className="menuItem">CONTACTO</li>
                    </ul>
                </div>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar;