import React, { useState } from 'react';
import Preloader from '../Common/Preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../assets/images/user.png'
import ProfileDataReduxForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

    let [editMode, setEditMode] = useState(false);

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
                <div>{isOwner && <label htmlFor={'file-upload'} className={s.customFileUpload}>
                    Choose File
                    <input id={'file-upload'} type={'file'} onChange={onProfilePhotoChanged} />
                </label>}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
                {editMode
                    ? <ProfileDataReduxForm profile={profile} />
                    : <ProfileData profile={profile} isOwner={isOwner} onEditMode={() => { setEditMode(true) }} />}
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, onEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={onEditMode}>Edit</button></div>}
        <div><b>Name:</b> {profile.fullName}</div>
        <div><b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
        <div> {profile.lookingForAJob && <div><b>Skills: </b> {profile.lookingForAJobDescription}</div>} </div>
        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            }
            )}
        </div>
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contacts}>
        <b>{contactTitle}:</b> {contactValue}
    </div>
}

export default ProfileInfo;
