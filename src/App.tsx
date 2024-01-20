
import './App.css'
import { Header } from './components/Header'

import { Footer } from './components/Footer'
import { Outlet } from 'react-router-dom'
import { Item } from './components/Router'
import { Cart } from './components/Cart'


export interface CartProps {
  cartItems:Item[],
   setCartItems: React.Dispatch<React.SetStateAction<Item[]>>}

function App({cartItems, setCartItems}:CartProps) {


  return (
    <>
     <Header  />
     <Outlet />
     <Cart cartItems={cartItems} setCartItems={setCartItems}  />
     <Footer/>
    </>
  )
}

export default App
