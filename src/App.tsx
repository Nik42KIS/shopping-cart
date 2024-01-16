import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { Footer } from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
     <Header />
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
