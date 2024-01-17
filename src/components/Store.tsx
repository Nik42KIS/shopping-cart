import React, { useEffect } from 'react'

import {Item} from './Router'
export const Store = ({items, setItems}:{items: Item[], setItems: React.Dispatch<React.SetStateAction<Item[]>>}) => {


    useEffect(()=>{
     fetch('https://fakestoreapi.com/products/category/electronics')
        .then((res:Response)=>res.json())
        .then((json:Item[])=> setItems(json))
    
    },[])

  return (
    <div>
        <ul>
            {items && items.map((item:Item) =>{
                return (
                    <li key={item.id}>
                        <img src={item.image} alt="" />
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <button>Add to Cart</button>
                    </li>
                ) 
            } )}
        </ul>
    </div>
   
  )
}
