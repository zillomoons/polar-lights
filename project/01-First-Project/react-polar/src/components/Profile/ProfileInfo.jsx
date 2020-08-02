import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div><img src='https://m.dw.com/image/37030280_101.jpg' /></div>
            <div className={s.description}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;
