import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from "./components/Login.jsx"
import Signup from './components/Signup.jsx'
import Header from './components/Header.jsx'
import Root from './Root.jsx'
import   { BrowserRouter as Router } from 'react-router-dom';
import Trending from './components/Trending.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

  const router1 = createBrowserRouter([
   
    {
      path: "/login", 
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  {
    path: "/",
    element: <Root/>,
    children:[
    {
       path: "/",
   element: <App/>,
   },
  
  {       path: "/trending",
    element: <Trending/>,
    },
   ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   
     <RouterProvider router={router1} />
     
  </React.StrictMode>,
)
