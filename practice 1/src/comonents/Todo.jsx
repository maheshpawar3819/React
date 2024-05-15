import React from 'react'

const Todo = () => {
  return (
    <div>
        <h1 className='text-secondary mt-4 offset-2'>To Do App</h1>
      <input type="text" placeholder='Enter the task here' className='form-control offset-1 mt-5 p-3' />
      <button className='btn btn-info p-2 ps-4 pe-4 m-3 '>
        Add Task
      </button>
    </div>
  )
}

export default Todo
