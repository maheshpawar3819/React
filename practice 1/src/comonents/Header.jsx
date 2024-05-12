import React from 'react'

const Header = () => {
  return (
    <div className='col' >
        <nav className='d-flex align-center justify-content-between ms-5 bg-light p-2'>
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
        </nav>
    </div>
  )
}

export default Header
