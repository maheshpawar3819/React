import React from 'react'
import { useState } from 'react'

const Countnum = () => {
    const [state,useState]=useState("increment decrement");
  return (
    <div>
      <p>
        {state}
      </p>

      <button>
        Increment
      </button>
      <button>
        Decrement
      </button>
    </div>
  )
}

export default Countnum
