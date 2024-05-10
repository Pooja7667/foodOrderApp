import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Manu from "./pages/manu";
import Contect from "./pages/Contect";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,

    children: [
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "Home/manu",
        element: <Manu/>,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "contect",
        element: <Contect />,
      },
      {
        path: "manu",
        element: <Manu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  
  </React.StrictMode>
);

