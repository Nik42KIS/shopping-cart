import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <HomePage />
     <Footer/>
    </>
  )
}

export default App
