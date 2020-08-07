import React from "react";
import s from './users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([ {
        id: 1,
        photo: 'https://pm1.narvii.com/6532/db0c810124ee43a8d559782e5b8091b7f589cdc1_00.jpg',
        followed: false,
        fullName: 'Nicole',
        status: 'doctor',
        location: {city: 'Elmore', country: 'USA'}
    },
        {
            id: 2,
            photo: 'https://pbs.twimg.com/profile_images/1226047118390910978/KpH5f8TI_400x400.jpg',
            followed: true,
            fullName: 'Gumball',
            status: 'cool dude',
            location: {city: 'Elmore', country: 'USA'}
        },
        {
            id: 3,
            photo: 'https://i.pinimg.com/originals/c8/74/27/c8742733ec69bcf92870c7c5cfbbb1ef.jpg',
            followed: true,
            fullName: 'Marcy',
            status: 'vampire',
            location: {city: 'somewhere', country: 'Woo'}
        },
        {
            id: 4,
            photo: 'https://cdn.getstickerpack.com/storage/uploads/sticker-pack/jake-the-dog-adventure-time/sticker_5.png?da79276a26129de11d0679eb2bfa6e6a',
            followed: false,
            fullName: 'Jake',
            status: 'super-dog',
            location: {city: 'sweet kingdom', country: 'Woo'}
        }])
    }
    return <div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <img src={u.photo} className={s.photo}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </div>
                </div>
            )
        }
    </div>
}


export default Users;

