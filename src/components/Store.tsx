import React, { useEffect, useState } from 'react'

export const Store = () => {

    interface Item{
        id:number,
        image:string,
        title:string,
        price:number,
        description:string
    }

    const [ items, setItems] = useState<Item[]>([])

    useEffect(()=>{
     fetch('https://fakestoreapi.com/products/category/electronics?limit=10')
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
                        <span>{item.description}</span>
                    </li>
                ) 
            } )}
        </ul>
    </div>
   
  )
}
