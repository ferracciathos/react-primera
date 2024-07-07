import "./navbar.css"
import logo from "../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa"
function Navbar () {
    return (
        <div>
            <nav className="navbar">
                <div>
                    <img src={logo} alt="logo"/>
                </div>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="">Inicio</a>
                </li>
                <li className="navbar-item">
                    <a href="">Productos</a>
                </li>
                <li className="navbar-item">
                    <a href="">Nosotros</a>
                </li>
                <li className="navbar-item">
                    <a href="">Contacto</a>
                </li>
            </ul>
            <div className="shoppingCart">
                <FaShoppingCart size="30px"></FaShoppingCart>
                <span className="badge">3</span>
            </div>
            </nav>
        </div>
    )
}

export default Navbar