import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './comonents/Home'
import Header from './comonents/Header'
import Footer from './comonents/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
