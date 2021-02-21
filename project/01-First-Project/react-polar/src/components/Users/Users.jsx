import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return <div>
        <div className={s.pages}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }} key={p.id}>{p}</span>
            }
            )}

        </div>
        {props.users.map(u =>
            <div key={u.id}>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo} />
                </NavLink>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios
                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: { 'API-KEY': '7e848bf8-eb7e-40a9-a703-e38f9a1dc7de' }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                        }}>UNFOLLOW</button>

                        : <button onClick={() => {
                            axios
                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: { 'API-KEY': '7e848bf8-eb7e-40a9-a703-e38f9a1dc7de' }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                        }}>FOLLOW</button>
                    }
                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </div>
            </div>
        )
        }
    </div>
}

export default Users;