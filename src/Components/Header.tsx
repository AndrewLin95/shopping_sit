import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <div id="shopName">Candy Emporium +</div>
           
            <div id="navBar">
                    <Link className="navLinks" to="/shopping_site/">Home</Link>
                    <Link className="navLinks" to="/shopping_site/products">Products</Link>
                    <Link className="navLinks" to="/shopping_site/cart">Shopping Cart</Link>
            </div>
            
        </div>
    )
}

export default Header;