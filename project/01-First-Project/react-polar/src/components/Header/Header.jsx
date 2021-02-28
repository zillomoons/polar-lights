import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { NavLink, Redirect } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className={s.header}>
      <img src={logo} />
      <div className={s.auth}>
        {props.isAuth
          ? <div> {props.login} - <button onClick={props.logOut}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>
        }

      </div>
    </div>
  );
}

export default Header;
