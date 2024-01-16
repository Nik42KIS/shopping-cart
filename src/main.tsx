import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Store } from './components/Store.tsx';
import { HomePage } from './components/HomePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {path:'store', element:<Store/>},
      {path:'/', element:<HomePage/>}
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
