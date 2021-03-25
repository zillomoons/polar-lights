import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unfollow, follow }) => {
    return <div>
        <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.photo} />
        </NavLink>
        <div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id)
                }} >UNFOLLOW</button>

                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id)
                }} >FOLLOW</button>
            }
        </div>
        <div>
            <div>{user.name}</div>
            <div>{user.status}</div>
        </div>
        <div>
            <div>{"user.location.city"}</div>
            <div>{"user.location.country"}</div>
        </div>
    </div>

}

export default User;