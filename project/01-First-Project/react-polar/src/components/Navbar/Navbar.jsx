import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    const Friends = (props) => {
        let path = '/dialogs/' + props.id;
        return (
            <div>
                <img src='https://static.grouple.co/uploads/pics/11/53/886_p.jpg'/>
                <div>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
            </div>
        );
    }
   let friendsElements = props.state.friends.map( f => <Friends name={f.name} id={f.id} /> );
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.friends}>
                <h3>Friends</h3>
                <div className={s.friendsItem}>
                    {friendsElements}
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
