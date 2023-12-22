import React from 'react'
import logo from '../../../assets/common/logo.svg'
import './index.css'

export const Header = () => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={logo} />
        <p className='header-logo-text'>Crypton</p>
      </div>
      <div className='header-actions'>
        <div className='header-items'>
          <p className='header-item active'>Home</p>
          <p className='header-item'>About</p>
          <p className='header-item'>Service</p>
          <p className='header-item'>Events</p>
        </div>
        <div>
          <button className='sign-in-btn'>Sign in</button>
        </div>
      </div>
    </div>
  )
}
