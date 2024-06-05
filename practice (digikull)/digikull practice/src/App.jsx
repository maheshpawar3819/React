import { useState } from 'react'
import './App.css'
import Practice from './Components/Practice'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Practice/>
    </>
  )
}

export default App
