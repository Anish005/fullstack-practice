import React from "react"
import cartLogo from "../images/cart1.jpg" // inorder that when webpack bundles into a giant JS file to compute it doesnt break the code

export default function Navbar(){
    return(
        <nav>
            <img src= {cartLogo}
            alt="cart-logo"
            className="nav--icon"
            />
            <h3 className="nav--logo_text">E-Cart SaaS</h3>
            <h4 className="nav--title">E-Cart Features</h4>
        </nav>
    )
}