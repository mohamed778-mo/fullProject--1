import React from 'react'

import './header.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.jpg' ;
const Header = () => {
  return (
    <div className='header web-header'>
      <Link to="/posts">
        <div className='header-left'>
          <img src={logo} />
        </div>
      </Link>
      <div className='header-right'>
        <Link to ="/login"><p>sign in</p></Link>
        <Link to ="/"><p>sign up </p></Link> 
      </div>
    </div>
  )
}

export default Header