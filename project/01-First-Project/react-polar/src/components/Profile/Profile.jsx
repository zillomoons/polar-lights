import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div><img src='https://m.dw.com/image/37030280_101.jpg' /></div>
            <div>ava+description</div>
            <MyPosts />
        </div>
    );
}

export default Profile;
