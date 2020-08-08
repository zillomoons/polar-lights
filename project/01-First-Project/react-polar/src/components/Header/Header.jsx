import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className={s.header}>
          <img src= {logo} />
        </div>
    );
}

export default Header;
