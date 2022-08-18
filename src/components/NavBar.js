const NavBar = ()=> {
    return(
        <header>
            <nav className="navBar">
                <div>
                    <h1 className="headerLogo">MY PET-SHOP</h1>
                </div>
                <div>
                    <ul className="menuItemList">
                        <li className="menuItem">HOME</li>
                        <li className="menuItem">PRODUCTOS</li>
                        <li className="menuItem">NOSOTROS</li>
                        <li className="menuItem">CONTACTO</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;