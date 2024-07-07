import "./navbar.css"
import logo from "../assets/logo.png"
function Navbar () {
    return (
        <div>
            <nav className="navbar">
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="">Inicio</a>
                </li>
                <li className="navbar-item">
                    <a href="">Productos</a>
                </li>
                <div>
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <li className="navbar-item">
                    <a href="">Nosotros</a>
                </li>
                <li className="navbar-item">
                    <a href="">Contacto</a>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar