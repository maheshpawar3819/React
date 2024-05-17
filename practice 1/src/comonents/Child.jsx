import React from 'react'

const Child = (props) => {
    // props.add();

    let forbtn=()=> {
        props.add();
    }
  return (
    <div>
        <h1 className='offset-2 text-secondary'>Add Numbers</h1>
        <input type="text" className='form-control offset-1 mt-5' />
        <input type="text" className='form-control offset-1 mt-5' />

      <button className='btn btn-danger mt-4 offset-2 ps-4 pe-4 p-2'>
        Add
      </button>
        
    </div>
  )
}

export default Child
