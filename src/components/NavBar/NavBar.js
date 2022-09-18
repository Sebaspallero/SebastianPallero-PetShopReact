import CartWidget from "../CartWidget/CartWidget";
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
                        <Link to='/' className="menuItem">HOME</Link>
                        <Link to='/' className="menuItem">NOSOTROS</Link>
                        <Link to='/' className="menuItem">PRODUCTOS</Link>
                        <Link to='/'className="menuItem">CONTACTO</Link>
                    </ul>
                </div>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar;