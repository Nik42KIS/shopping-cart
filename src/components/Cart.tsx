import React from 'react';
import { CartProps } from '../App';
import { Item } from './Router';

export const Cart = ({ cartItems, setCartItems }: CartProps) => {
  return (
    <div>
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
  );
};
