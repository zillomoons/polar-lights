import React from 'react';
import Preloader from '../Common/Preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.description}>
                <img src={profile.photos.large} />
                <ProfileStatusWithHooks status={status}
                    updateStatus={updateStatus} />
                <p>Name: {profile.fullName}</p>
                <p>About Me: {profile.aboutMe}</p>
                <p>VK: {profile.contacts.vk}</p>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;
