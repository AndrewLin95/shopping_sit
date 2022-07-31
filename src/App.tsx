import React, { useState } from 'react';
import './Styling/App.css';
import './Styling/Reset.css'
import Header from "./Components/Header";
import RouteSwitch from './RouteSwitch';
import Footer from './Components/Footer';

function App() {

    const [cart, useCart] = useState({});
    const [price, usePrice] = useState();

    // 1) have cart show each item. Each item to include picture, price of each, description and quantity
    // 2) show sum of prices at the bottom. Can use a separate state for this

    const updateCart = () => {
        const obj = {item1: "teas", item2: "coconut"};
        useCart(obj);
    }

    return(
        <>
            <Header />
            
            <Footer />
        </>
    )
}

export default App;