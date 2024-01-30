import React, { useEffect, useState } from 'react';

import { CartItem, Item } from './Router';
import styled from 'styled-components';

import ADD_TO_CART from '../assets/icons/add-to-cart.png'

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  row-gap:20px;
`;
const Loading = styled.div`
    height:700px;
  font-size: 5rem;
  text-align: center;
  margin: 200px 0;
`;
const ProductItem = styled.li`
  height: 440px;
  width: 440px;
  border:2px solid #010101;
  border-radius:14px;
  display:grid;
  justify-items:center;
  list-style-type: none;
  transition: all 0.2s;
  &:hover{
    box-shadow: 0 0 7px black;
  }
  img {
    height: 250px;
    margin-top: 5px;
  }
  div{
    background-color: #f3f3f3;
    width:100%;
    border-radius: 0 0 14px 14px;
    display:grid;
    grid-template-columns:100px 1fr 80px;
    align-items:center;
  }
  span{
    display:block;
    font-size:1.3rem;
    margin:10px;
    grid-column:1/4
  }
  p{
    font-size: 2.3rem;
    font-weight: bold;
    text-align:center;
    margin:10px;
  }
`
const StoreWrap = styled.section`
    margin:45px;
`
const AddCartBtn = styled.button`
  padding:7px;
  border-radius: 14px;
  grid-column:3/4;
  margin:10px;
  cursor:pointer;
  border:none;
  background-color: #dedede;
  &:hover{
    background-color: #c7c7c7;
  }
  &:active{
    background-color: #9dffb0;
  }
img{
  pointer-events: none;
  height:40px;
}
`
interface StoreProps {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  recountPrice: () => void;
  totalPrice: number;
}
export const Store = ({
  items,
  setItems,
  cartItems,
  setCartItems,

}: StoreProps) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then((res: Response) => res.json())
      .then((json: Item[]) => setItems(json))
      .finally(() => setIsLoading(false));
  }, []);

  const addToCart = (event: React.MouseEvent) => {
    // event.stopPropagation()
    const target = event.target as HTMLButtonElement;
    const currentId: string | undefined = target.closest('button').parentElement?.parentElement?.id;
    const filteredElem: Item = items.filter((item: Item) => item.id === Number(currentId))[0];

    const tempArr = [...cartItems];
    const foundedElement = tempArr.findIndex((item) => item.id === filteredElem.id);

    if (foundedElement != -1) {
      cartItems.forEach((element, index) => {
        if (element.id === filteredElem.id) {
          tempArr[index].count++;
          setCartItems(tempArr);
        }
      });
    } else {
      const newCartElem: CartItem = { ...filteredElem, count: 1 };
      const updatedArray = [...tempArr, newCartElem];
      setCartItems(updatedArray);
    }

  };

  

  if (isLoading) return <Loading>Loading...</Loading>;
  return (
    <StoreWrap>
      <ProductList>
        {items &&
          items.map((item: Item) => {
            return (
              <ProductItem key={item.id} id={item.id.toString()}>
                <img src={item.image} alt="" />
                <div>
                  <span>{item.title}</span>
                  <p>${item.price}</p>
                  <AddCartBtn onClick={(e) => addToCart(e)}>
                    <img  src={ADD_TO_CART} alt="Add to cart" />
                  </AddCartBtn>
                </div>
                
              </ProductItem>
            );
          })}
      </ProductList>
    </StoreWrap>
  );
};
