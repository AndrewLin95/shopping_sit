import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Contacts from "./Components/Pages/Contacts";
import Cart from "./Components/Pages/Cart";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;