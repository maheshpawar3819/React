import React from 'react'

const Header = () => {
  return (
    <div className='col' >
        <nav className='d-flex align-center justify-content-between bg-light p-3'>
        <li className='list-unstyled me-5 fs-5 text-dark ms-5'>
            Home
        </li>
        <li className='list-unstyled me-5 fs-5 text-dark ms-5'>
            Product
        </li>
        <li className='list-unstyled me-5 fs-5 text-dark ms-5'>
            Contact Us
        </li>
        <li className='list-unstyled me-5 fs-5 text-dark ms-5'>
            About Us
        </li>

        <button className='rounded-pill btn btn-info text-white ps-4 pe-4'>
            Sign In
        </button>
        <button className='rounded-pill btn btn-info text-white ps-4 pe-4'>
            Login in
        </button>
        </nav>
    </div>
  )
}

export default Header
