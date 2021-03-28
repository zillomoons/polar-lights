import React from 'react';
import Preloader from '../Common/Preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../assets/images/user.png'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }
    const onProfilePhotoChanged = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div className={s.description}>
                <img src={profile.photos.large || userPhoto} className={s.profilePhoto} />
                <p>{isOwner && <input type={'file'} onChange={onProfilePhotoChanged} />}</p>
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
