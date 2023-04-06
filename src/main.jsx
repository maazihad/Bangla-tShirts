import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Main from './components/Layout/Main';
import About from './components/About/About';
import Home from './components/Home/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('tShirts.json'),
      },
      {
        path: 'about',
        element: <About />
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
