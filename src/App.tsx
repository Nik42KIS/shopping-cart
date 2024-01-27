import './App.css';
import { Header } from './components/Header';

import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import { CartItem } from './components/Router';
import { Cart } from './components/Cart';


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

 

  return (
    <>
      <Header 
       isCartActive={isCartActive}
        setIsCartActive={setIsCartActive}
      />
      <Outlet />
     {isCartActive && <Cart
        recountPrice={recountPrice}
        totalPrice={totalPrice}
        isCartActive={isCartActive}
        setIsCartActive={setIsCartActive}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />}
      <Footer />
    </>
  );
}

export default App;
