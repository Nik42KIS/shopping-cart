import React, { useEffect, useState } from 'react'

export const Store = () => {

    const [ items, setItems] = useState([])

    useEffect(()=>{
      const res =  fetch('https://fakestoreapi.com/products/category/electronics?limit=10')
        .then(res=>res.json())
        .then(json=> setItems(json))
        
    },[])

  return (
    <div>
        <ul>
            {items && items.map(item =>{
                return (
                    <li key={item.id}>
                        <img src={item.image} alt="" />
                        <p>{item.title}</p>
                    </li>
                )
            } )}
        </ul>
    </div>
   
  )
}
