import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listtable from './comonents/Listtable'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Listtable/>
    </>
  )
}

export default App
