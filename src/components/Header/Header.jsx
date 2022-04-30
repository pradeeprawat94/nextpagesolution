import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  let CartItem = 0;


  return (

    <div className='header'>
      <Link to={'/cart'}>
        <p>Cart <span style={{ color: 'red' }}>{CartItem}</span></p> 
      </Link>

    </div >

  )
}

export default Header