import React from 'react';
import Preloader from '../Common/Preloader/preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.profile_image}>
                <img src='https://m.dw.com/image/37030280_101.jpg' alt='polar lights' />
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large} />
                <p>About Me: {props.profile.aboutMe}</p>
                <p>VK: {props.profile.contacts.vk}</p>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;
