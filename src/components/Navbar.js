import React, { Component } from 'react';
import logo from '../logo.svg';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="App">
	  <h1>Hello From Navbar</h1>
  <nav className="navbar">
  <img src={logo} alt="city tours" width="80px"/>
   
   <ul className="nav-links">
   <li>
     <a href="/" className="nav-link">Home</a>
   </li>
<li>
     <a href="/" className="nav-link">About</a>
   </li>
   
<li>
     <a href="/" className="nav-link">Tours</a>
   </li>
   
   
   </ul>
  
  
  </nav>       

	   </div>
    );
  }
}

export default Navbar;
