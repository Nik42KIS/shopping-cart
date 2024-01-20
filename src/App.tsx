import './App.css';
import { Header } from './components/Header';

import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Item } from './components/Router';
import { Cart } from './components/Cart';

export interface CartProps {
  cartItems: Item[];
  setCartItems: React.Dispatch<React.SetStateAction<Item[]>>;
  isCartActive: boolean;
  setIsCartActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function App({ cartItems, setCartItems, isCartActive, setIsCartActive }: CartProps) {
  return (
    <>
      <Header 
       cartItems={cartItems}
       setCartItems={setCartItems}
       isCartActive={isCartActive}
        setIsCartActive={setIsCartActive}
      />
      <Outlet />
     {isCartActive && <Cart
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
