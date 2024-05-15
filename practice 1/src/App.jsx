import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Concatword from './comonents/Concatword'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Listtable/> */}
     <Concatword/>
    </>
  )
}

export default App
