import React from 'react';
import { CartProps } from '../App';
import { Item } from './Router';
import styled from 'styled-components';

export const Cart = ({ cartItems, setCartItems, isCartActive, setIsCartActive}: CartProps) => {
 
  const CartWrapper = styled.div`
  position:fixed;
  height:100vh;
  width:100vw;
  background-color: rgba(0,0,0, 0.1);
  top:0;
  left:0;
  display:flex;
  justify-content: flex-end;
  `
  const CartList = styled.ul`
  display:flex;
  flex-direction:column;
  `
  return (
    <CartWrapper onClick={()=>setIsCartActive(false)}>
      <div onClick={(e)=>e.stopPropagation()} >
        <ul>
        {cartItems.map((item: Item) => {
          return (
            <li key={item.id} id={item.id.toString()}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <button>Remove</button>
            </li>
          );
        })}
      </ul>
      </div>
      
    </CartWrapper>
  );
};
