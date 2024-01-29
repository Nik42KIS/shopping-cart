import './App.css';
import { Header } from './components/Header';

import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import { CartItem } from './components/Router';
import { Cart } from './components/Cart';
import styled from 'styled-components';


export interface CartProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isCartActive: boolean;
  setIsCartActive: React.Dispatch<React.SetStateAction<boolean>>;
  recountPrice: ()=>void;
    totalPrice:number;
  // setCountItems:React.Dispatch<React.SetStateAction<number>>;
}

function App({ cartItems, setCartItems, isCartActive, setIsCartActive, recountPrice,totalPrice }: CartProps) {

  // const Wrapper = styled.div`
  //   display: grid;
  //   height:100vh;
  //   grid-template-rows:80px 1fr 70px;
  
  // `

  return (
    <>
      <Header 
       isCartActive={isCartActive}
        setIsCartActive={setIsCartActive}
      />
      <Outlet />
      <Footer />
     {isCartActive && <Cart
        recountPrice={recountPrice}
        totalPrice={totalPrice}
        isCartActive={isCartActive}
        setIsCartActive={setIsCartActive}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />}
    </>
  );
}

export default App;
