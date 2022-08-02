import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <div id="shopName">Candy Emporium +</div>
           
            <div id="navBar">
                    <Link className="navLinks" to="/">Home</Link>
                    <Link className="navLinks" to="/products">Products</Link>
                    <Link className="navLinks" to="/cart">Shopping Cart</Link>
            </div>
            
        </div>
    )
}

export default Header;