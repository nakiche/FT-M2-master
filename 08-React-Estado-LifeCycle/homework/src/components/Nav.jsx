import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  console.log(Logo);
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="./">
         <img src="{Logo.data}" width="30" height="30" className="d-inline-block align-top" alt=""/>
      Henry - Weather App
      </a>
     <SearchBar onSearch={onSearch}
       
     /> 

    </nav>
  );
};

export default Nav;
