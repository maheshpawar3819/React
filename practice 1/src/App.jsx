import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countnum from './comonents/Countnum'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Countnum/>
    </>
  )
}

export default App
