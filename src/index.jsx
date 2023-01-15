import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';
import ProtectedRoute from './pages/ProtectedRoute';

// **** 라우터 설정
// / 👉 <Home>
// /products 👉 <AllProducts>
// /products/new 👉 <NewProduct>
// /products/:id 👉 <ProductDetail>
// /carts 👉 <MyCart>
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      {
        path: '/products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '/carts',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
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
