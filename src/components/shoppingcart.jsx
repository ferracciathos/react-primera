import React from "react"
import "./navbar.css"
import { FaShoppingCart } from "react-icons/fa"
function shoppingCart () {
    return (
        <div className="carrito">
            <FaShoppingCart size="30px"></FaShoppingCart> 
            <span className="badge">3
            </span>   
    </div>
    )
}
    
export default shoppingCart