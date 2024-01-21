import React, { useEffect } from 'react'

import {Item} from './Router'
import styled from 'styled-components'

export const ProductList = styled.ul`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
`
const ProductItem = styled.li`
    height:400px;
    width:400px;
    list-style-type:none;
    img{
        height:250px;
        
    }
`

export const Store = ({items, setItems, cartItems, setCartItems}:{items: Item[], setItems: React.Dispatch<React.SetStateAction<Item[]>>,cartItems:Item[], setCartItems: React.Dispatch<React.SetStateAction<Item[]>>}) => {


    useEffect(()=>{
     fetch('https://fakestoreapi.com/products/category/electronics')
        .then((res:Response)=>res.json())
        .then((json:Item[])=> setItems(json))
    
    },[])

    const addToCart = (event:React.MouseEvent)=>{
        console.log(event.target)
        const target = event.target as HTMLButtonElement
        const currentId:string | undefined = target.parentElement?.id 
        const updatedArray = [...cartItems, ...items.filter(((item:Item) => item.id === Number(currentId) ))]
        setCartItems(updatedArray)
    }

  return (
    <div>
        <ProductList>
            {items && items.map((item:Item) =>{
                return (
                    <ProductItem key={item.id} id={item.id.toString()}>
                        <img src={item.image} alt="" />
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <button  onClick={(e)=>addToCart(e)}>Add to Cart</button>
                    </ProductItem>
                ) 
            } )}
        </ProductList>
    </div>
   
  )
}
