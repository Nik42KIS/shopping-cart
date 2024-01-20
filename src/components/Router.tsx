import App from '../App.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {  Store } from './Store.tsx';
import { HomePage } from './HomePage.tsx';
import { ErrorPage } from './ErrorPage.tsx';
import { useState } from 'react';
export interface Item{
  id:number,
  image:string,
  title:string,
  price:number,
  description?:string
}
export const Router = () => {

  const [ items, setItems] = useState<Item[]>([])
  const [ cartItems, setCartItems] = useState<Item[]>([])
    const router = createBrowserRouter([
        {
          path: "/",
          element:<App cartItems={cartItems} setCartItems={setCartItems}/>,
          errorElement: <ErrorPage />,
          children:[
            {path:'store', element:<Store items={items} setItems={setItems} cartItems={cartItems} setCartItems={setCartItems}/>},
            {path:'/', element:<HomePage/>}
          ]
        },
      
      ])
      
  return  <RouterProvider router={router} />
}
