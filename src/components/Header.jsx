import React from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        
        <header className="navbar">
  <img className="logo" src={logo}alt="Entri news ;ogo"  />
  <nav className="links">
    <ul>
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <a href="#" className="link">
          New
        </a>
      </li>
      <li>
        <a href="#" className="link">
          Popular
        </a>
      </li>
      <li>
        <Link to="/trending" className="link">
          Trending
        </Link>
      </li>
      <li>
        <a href="#" className="link">
          Categories
        </a>
      </li>
    </ul>
  </nav>
</header>



    </div>
  )
}

export default Header