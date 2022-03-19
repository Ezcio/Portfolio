import React from 'react'
import { images } from '../../constants'
import './Navbar.scss'


const items = ['home' ,'about' , 'work', 'skills', 'contact' ];


const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="Logo"></img>
      </div>
      <ul className='app__navbar-links'>
        {items.map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar