import React, { useEffect, useState } from 'react';

import { CartItem, Item } from './Router';
import styled from 'styled-components';

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const Loading = styled.div`
  font-size: 5rem;
  text-align: center;
  margin: 200px 0;
`;
const ProductItem = styled.li`
  height: 400px;
  width: 400px;
  list-style-type: none;
  img {
    height: 250px;
  }
`;
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
  recountPrice,

}: StoreProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then((res: Response) => res.json())
      .then((json: Item[]) => setItems(json))
      .finally(() => setIsLoading(false));
  }, []);

  const addToCart = (event: React.MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    const currentId: string | undefined = target.parentElement?.id;
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
    recountPrice();
  };

  

  if (isLoading) return <Loading>Loading...</Loading>;
  return (
    <div>
      <ProductList>
        {items &&
          items.map((item: Item) => {
            return (
              <ProductItem key={item.id} id={item.id.toString()}>
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                <p>{item.price}</p>
                <button onClick={(e) => addToCart(e)}>Add to Cart</button>
              </ProductItem>
            );
          })}
      </ProductList>
    </div>
  );
};
