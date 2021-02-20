import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png';

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
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            }
            )}

        </div>
        {props.users.map(u =>
            <div key={u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo} />
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>UNFOLLOW</button>
                        : <button onClick={() => {
                            props.follow(u.id)
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