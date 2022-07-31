import React, { useState } from 'react';
import './Styling/App.css';
import './Styling/Reset.css'
import Header from "./Components/Header";
import RouteSwitch from './RouteSwitch';
import Footer from './Components/Footer';

function App(){

    return(
        <>
            <Header />
            <RouteSwitch />
            <Footer />
        </>
    )
}

export default App;