import React from 'react'

const Child = (props) => {
    // props.add();

    let forbtn=()=> {
        props.add();
    }
  return (
    <div>
      <button onClick={forbtn}>
        Add 
      </button>
    </div>
  )
}

export default Child
