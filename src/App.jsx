import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import LayOut from "./components/LayOut/LayOut.jsx";
import Home from "./components/Home/Home.jsx";
import About from './components/About/About';

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path:'about', element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
