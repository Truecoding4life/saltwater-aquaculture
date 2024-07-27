import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'

// Page to display
import HomePage from './pages/Homepage/Homepage.jsx'
import SalePage from './pages/Sale/Sale.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import Guarantee from './pages/Guarantee/Guarantee.jsx';
import MilitaryDiscount from './pages/MilitaryDiscount/MilitaryDiscount.jsx';
import Shipping from './pages/Shipping/Shipping.jsx';
import SpecialRequest from './pages/SpecialRequest/SpecialRequest.jsx';
import Detail from './pages/Detail/Detail.jsx';

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
        path: 'sale/:id',
        element: < Detail/>,
      },
      {
        path: 'about-us',
        element: <AboutUs/>,
      },
      {
        path: 'guarantee',
        element: <Guarantee/>,

      },{
        path : 'military-discount',
        element: <MilitaryDiscount/>,
      },{
        path: 'shipping',
        element: <Shipping/>,
      },{
        path: 'special-request',
        element: <SpecialRequest/>,
      }
,      {
        path: '*',
        element: <HomePage/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
