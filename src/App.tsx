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
const AppContainer = styled.div`
  margin:0;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

function App({ cartItems, setCartItems, isCartActive, setIsCartActive, recountPrice,totalPrice }: CartProps) {

  // const Wrapper = styled.div`
  //   display: grid;
  //   height:100vh;
  //   grid-template-rows:80px 1fr 70px;
  
  // `

  return (
    <AppContainer>
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
    </AppContainer>
  );
}

export default App;
