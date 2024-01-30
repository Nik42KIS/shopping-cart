import React from 'react';
import { CartProps } from '../App';
import { CartItem, Item } from './Router';
import styled from 'styled-components';

export const Cart = ({ cartItems, setCartItems, setIsCartActive, totalPrice }: CartProps) => {
  const CartWrapper = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.1);
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;

    > div {
      height: 100vh;
      background-color: #fdfdfd;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 640px;
      overflow: auto;
      /* position:relative; */
    }
  `;
  const CartList = styled.ul`
    display: flex;
    flex-direction: column;
    /* gap: 7px; */
    padding-bottom: 6.4rem;
    
  `;
  const CartListItem = styled.li`
    /* margin-top: 10px; */
    display: grid;
    grid-template-columns: 1fr 350px;
    /* background-color: #f1f1f1; */
    padding: 10px;
    list-style-type: none;
    border-bottom: 2px solid black;
    /* border-top: 2px solid black; */

    img {
      height: 175px;
      max-width: 220px;
      margin: 0 auto;
      border-radius: 10px;
    }
  `;
  const ItemInfo = styled.span`
    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: 2.2rem;
      margin: 12px 0;
      font-style: italic;
      font-weight: bold;
      color: #000000;
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
  const TotalPrice = styled.div`
    box-sizing: border-box;
    width: 620px;
    padding: 2rem;
    gap: 20px;
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    span {
      font-size: 1.8rem;
      font-weight: bold;
    }
  `;

  const CountItem = styled.div`
    width: 250px;
    button {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: #343434;
      color: #fdfdfd;
      text-align: center;
      font-size: 1.6rem;
      cursor: pointer;
      border: none;
      &:hover {
        background-color: #1a1a1a;
      }
    }
    span {
      padding: 5px 30px;
      margin: 15px;
      font-size: 2rem;
      background-color: #efefef;
    }
  `;
  const OrderBtn = styled.button`
    font-size: 1.2rem;
    text-align: center;
    width: 130px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 14px;
    cursor: pointer;
    text-decoration: none;

    background-color: #101010;
    color: #fdfdfd;
    &:hover {
      background-color: #1b1b1b;
    }
  `;
  const EmptyCart = styled.div`
    margin: 300px 200px;

    display: flex;
    flex-direction: column;
    span {
      font-size: 3rem;
      width: 300px;
      margin-bottom: 20px;
    }
    button {
      width: 260px;
      height: 40px;
      border: 1px solid black;
      background-color: #ffffff;
      border-radius: 10px;
      color: #121212;
      text-align: center;
      font-size: 1.6rem;
      cursor: pointer;
      transition: ease-in-out 0.2s;
      &:hover {
        background-color: #1a1a1a;
        color: #fdfdfd;
      }
    }
  `;
  function incrementCount(event: React.MouseEvent) {
    const target = event.target as HTMLButtonElement;
    const id: string | undefined = target.closest('li')?.id;
    const filteredElem: Item = cartItems.filter((item: CartItem) => item.id === Number(id))[0];
    const tempArr = [...cartItems];

    cartItems.forEach((element, index) => {
      if (element.id === filteredElem.id) {
        if (tempArr[index].count >= 99) {
          tempArr[index].count = 99;
          return;
        }
        tempArr[index].count++;
        setCartItems(tempArr);
      }
    });
  }

  function decrementCount(event: React.MouseEvent) {
    const target = event.target as HTMLButtonElement;
    const id: string | undefined = target.closest('li')?.id;
    const filteredElem: Item = cartItems.filter((item: CartItem) => item.id === Number(id))[0];
    const tempArr = [...cartItems];

    cartItems.forEach((element, index) => {
      if (element.id === filteredElem.id) {
        if (tempArr[index].count === 1) {
          tempArr.splice(index, 1);
        } else {
          tempArr[index].count--;
        }

        setCartItems(tempArr);
      }
    });
  }

  return (
    <CartWrapper onClick={() => setIsCartActive(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <CartList>
          {Object.keys(cartItems).length ? (
            cartItems.map((item: CartItem) => {
              return (
                <CartListItem key={item.id} id={item.id.toString()}>
                  <img src={item.image} alt="" />
                  <ItemInfo>
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>
                    <CountItem>
                      <button onClick={(e) => incrementCount(e)}>+</button>
                      <span>{item.count}</span>
                      <button onClick={(e) => decrementCount(e)}>-</button>
                    </CountItem>
                  </ItemInfo>
                </CartListItem>
              );
            })
          ) : (
            <EmptyCart>
              <span>Cart is empty</span>
              <button onClick={() => setIsCartActive(false)}>To Store </button>
            </EmptyCart>
          )}
        </CartList>
        {Object.keys(cartItems).length && (
          <TotalPrice>
            <span>Total price: ${totalPrice}</span>
            <OrderBtn>Pay</OrderBtn>
          </TotalPrice>
        )}
      </div>
    </CartWrapper>
  );
};
