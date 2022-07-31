import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { FC, useState } from 'react';
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Contacts from "./Components/Pages/Contacts";
import Cart from "./Components/Pages/Cart";
import Header from "Components/Header";
import Footer from "Components/Footer";
import './Styling/App.css';
import './Styling/Reset.css'

const RouteSwitch:FC = () => {

    const [cart, useCart] = useState({});
    const [price, usePrice] = useState();

    // 1) have cart show each item. Each item to include picture, price of each, description and quantity
    // 2) show sum of prices at the bottom. Can use a separate state for this

    const updateCart = () => {
        const obj = {item1: "teas", item2: "coconut"};
        useCart(obj);
    }

    const obj = {item1: "teas", item2: "coconut"};

    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes> 
                    <Route path="/" element={<Home/>} />
                    <Route path="/products" element={<Products updateCart={obj}/>} />
                    <Route path="/contacts" element={<Contacts/>} />
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
}

export default RouteSwitch;