import React from 'react'
import { CartProps } from '../App'
import { Item } from './Router'

export const Cart = ({cartItems, setCartItems}:CartProps) => {
  return (
    <div>
     { cartItems.map((item:Item)=>{
        return <span>{item.title}</span>
      })
      }
    </div>
  )
}
