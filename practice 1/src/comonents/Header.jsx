import React from 'react'

const Header = () => {
  return (
    <div className=''>
        <nav className='d-flex align-center justify-content-between ms-10 bg-y'>
        <li className='list-unstyled me-5 fs-5 text-dark'>
            Home
        </li>
        <li className='list-unstyled me-5 fs-5 text-dark'>
            Product
        </li>
        <li className='list-unstyled me-5 fs-5 text-dark'>
            Contact Us
        </li>
        <li className='list-unstyled me-5 fs-5 text-dark'>
            About Us
        </li>
        </nav>
    </div>
  )
}

export default Header
