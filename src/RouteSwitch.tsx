import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { FC, useEffect, useState } from 'react';
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Contacts from "./Components/Pages/Contacts";
import Cart from "./Components/Pages/Cart";
import Header from "Components/Header";
import Footer from "Components/Footer";
import './Styling/App.css';
import './Styling/Reset.css'

interface Obj{
    description: string,
    price: number,
    img: string,
    quantity: number
}

const RouteSwitch:FC = () => {

    const [cart, useCart] = useState<{[key: string]: any}>({});
    const [price, usePrice] = useState<number>(0);

    // TODO: add total quantity. Add button to remove each item (quantity of each item?) Home page. Animation or popup for when adding item to cart

    const updateCart = ( descriptionValue: string, priceValue: number, image: string, id: number ) => {
        const tempCart: {[id: number] : Obj} = cart;
        let tempPrice = price;
        if (id in tempCart){
            tempCart[id].quantity ++;
            useCart(tempCart);
        } else {
            tempCart[id] = {
                description: descriptionValue,
                price: priceValue,
                img: image,
                quantity: 1
            };
            useCart(tempCart);
        }
        tempPrice += priceValue;
        usePrice(Math.round(tempPrice*1000)/1000);
    }

    useEffect(()=>{
        console.log(cart);
        console.log(price);
    }, [cart, price])

    return (
        <>
            <BrowserRouter>
            <Header/>
                <Routes> 
                    <Route path="/" element={<Home/>} />
                    <Route path="/products" element={<Products updateCart={updateCart}/>} />
                    <Route path="/contacts" element={<Contacts/>} />
                    <Route path="/cart" element={<Cart cart={cart} price={price}/>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
        </>
    )
}

export default RouteSwitch;