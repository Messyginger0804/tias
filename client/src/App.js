import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
// import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  Outlet,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
// import ProductCard from './components/ProductCard';
import productsData from './api/api';
import SingleProduct from './components/SingleProduct';
import Login from './pages/Login';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: productsData,
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
        // loader: productsData,
      },
      {
        path: '/cart',
        element: <Cart />,
        // loader: productsData,
      },
      {
        path: '/login',
        element: <Login />,
        // loader: productsData,
      },
    ]
  }
]
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
