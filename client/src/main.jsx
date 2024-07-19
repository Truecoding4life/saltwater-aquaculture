import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'

// Page to display
import HomePage from './pages/Homepage/Homepage.jsx'
import SalePage from './pages/Sale/Sale.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,

    errorElement: <App />,

    children:[
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'sale',
        element: < SalePage/>,
      },
      {
        path: '*',
        element: <HomePage/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
