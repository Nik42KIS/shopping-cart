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
export interface CartItem extends Item{
count:number
}



export const Router = () => {

  const [ items, setItems] = useState<Item[]>([])
  const [ cartItems, setCartItems] = useState<CartItem[]>([])
  const [ isCartActive, setIsCartActive] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  function recountPrice(){
    
    const price =  cartItems.reduce((acc,item)=>{
       return acc+= item.price * item.count
     },0)
     setTotalPrice(price)
   }
  

    const router = createBrowserRouter([
        {
          path: "/",
          element:<App 
          recountPrice={recountPrice}
          totalPrice={totalPrice}
          isCartActive={isCartActive} 
          setIsCartActive={setIsCartActive} 
          cartItems={cartItems} 
          setCartItems={setCartItems}

          />,

          errorElement: <ErrorPage />,
          children:[
            {path:'store', element:<Store
            recountPrice={recountPrice}
            totalPrice={totalPrice}
             items={items} 
             setItems={setItems} 
             cartItems={cartItems} 
             setCartItems={setCartItems}

             />},
            {path:'/', element:<HomePage/>}
          ]
        },
      
      ])
      
  return  <RouterProvider router={router} />
}
