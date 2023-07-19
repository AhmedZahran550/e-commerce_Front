import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar/Nav.jsx';

const LayOut = () => {
    return (
        <>
        <NavBar/>
        <div className="container"> <Outlet></Outlet></div>
       
        </>
    );
}

export default LayOut;
