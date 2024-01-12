import React, { useEffect, useState } from 'react'

export const Store = () => {

    const [ items, setItems] = useState([])

    useEffect(()=>{
      const res =  fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> setItems(json))
        
    },[])

  return (
    <div>
        <ul>
            {items && items.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    </div>
   
  )
}
