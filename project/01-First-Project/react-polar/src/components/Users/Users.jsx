import React from "react";
import s from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        let pagesCount = this.props.totalCount / this.props.pageSize;
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}>{p}</span>
                }
                )}

            </div>
            {this.props.users.map(u =>
                <div key={u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo} />
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}

export default Users;

