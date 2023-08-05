import React from 'react'
import { useState } from 'react'
import './navbar.css'
import logo from '../images/logo.png'
// import logo from '../images/logoo.png'

import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'


const NavBar = () => {

  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav_container">
        <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
          <img src={logo} alt="Nav Logo" /></Link>
        <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_Nav'}`}>
          {
            // dans  ce cas  j'ai utulise la  methode Maping source  est DATA :

            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''}
                    onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className='nav_toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
          }
        </button>
      </div>
    </nav>
  )
}

export default NavBar
