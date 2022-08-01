import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <div>Candy Emporium +</div>
           
            <div id="navBar">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/cart">Shopping Cart</Link>
            </div>
            
        </div>
    )
}

export default Header;