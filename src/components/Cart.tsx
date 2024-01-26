import React from 'react';
import { CartProps } from '../App';
import { CartItem, Item } from './Router';
import styled from 'styled-components';

export const Cart = ({ cartItems, setCartItems, isCartActive, setIsCartActive }: CartProps) => {
  const CartWrapper = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.1);
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;

    div {
      height: 100vh;
      background-color: #fdfdfd;
      width: 640px;
      overflow: auto;
    }
  `;
  const CartList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `;
  const CartListItem = styled.li`
    height: 185px;
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr 350px;
    background-color: #ffb8b8;
    border-radius: 10px;
    padding: 10px;
    list-style-type: none;
    img {
      height: 175px;
      max-width: 220px;
      margin: 0 auto;
    }
  `;
  const ItemInfo = styled.span`
    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1.6rem;
      margin: 12px 0;
      font-style: italic;
      font-weight: bold;
      color: #006d24;
    }
    input {
      height: 30px;
      width: 60px;
      font-size: 1.3rem;
    }
    span {
      font-size: 1.2rem;
    }
  `;

  function incrementCount(event: React.MouseEvent) {
    const target = event.target as HTMLButtonElement;
    const id: string | undefined  = target.closest('li')?.id;
    // const currentId: string | undefined = target.parentElement?.id;
    const filteredElem: Item = cartItems.filter((item: CartItem) => item.id === Number(id))[0];

    const tempArr = [...cartItems];
 
      cartItems.forEach((element, index) => {
        if (element.id === filteredElem.id) {
          tempArr[index].count++;
          setCartItems(tempArr);
        }
      });
    
  }

  return (
    <CartWrapper onClick={() => setIsCartActive(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <CartList>
          {cartItems ? (
            cartItems.map((item: CartItem) => {
              return (
                <CartListItem key={item.id} id={item.id.toString()}>
                  <img src={item.image} alt="" />
                  <ItemInfo>
                    <h2>{item.title}</h2>
                    <p>{item.price}$</p>
                    <span>
                      <button onClick={(e) => incrementCount(e)}>+</button>
                      <input value={item.count} />
                      <button>-</button>
                    </span>
                  </ItemInfo>
                </CartListItem>
              );
            })
          ) : (
            <div>Cart is clear</div>
          )}
        </CartList>
      </div>
    </CartWrapper>
  );
};
