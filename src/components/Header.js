import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importeer Link
import '../App.css';

function Header(){
  return(
  <header className="header">
    <div className="logo-container">
      <span className="logo-text">LITTLE LEMON</span>
    </div>
    <nav>
      <ul className="nav-links">
        {/* 2. Vervang <a href="..."> door <Link to="..."> */}
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;