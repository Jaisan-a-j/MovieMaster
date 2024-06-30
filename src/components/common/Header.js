import React from 'react';
import '../../assets/styles/Header.css';

const Header = ({ onNavigate }) => {
  return (
    <div className='header'>
      <a href='/' className='logo'>
        MovieMaster
      </a>
      <div className='header-right'>
        <a href='#home' onClick={() => onNavigate('home')}>Home</a>
        <a href='#purchase' onClick={() => onNavigate('purchase')}>Purchase List</a>
      </div>
    </div>
  );
};

export default Header;
