import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import LayOut from "./components/LayOut/LayOut.jsx";
import Home from "./components/Home/Home.jsx";
import About from './components/About/About';
import NotFound from "./components/NotFound/NotFound.jsx";
import Register from "./components/Register/Register.jsx";
import Login from './components/login/Login';
import Brands from './components/Brands/Brands';
import Products from './components/Products/Products';
import Category from './components/Category/Category';

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path:'register', element: <Register /> },
        { path:'login', element: <Login /> },
        { path:'brands', element: <Brands /> },
        { path:'products', element: <Products /> },
        { path:'categories', element: <Category /> },
        { path:'about', element: <About /> },
        { path:'*', element: <NotFound/> },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
