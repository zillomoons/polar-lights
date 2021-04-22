import React, { useState } from 'react';
import s from './HeroProfile/HeroProfile.module.css'
import { ProfileDataReduxForm } from './ProfileDataForm';
import { ProfileDataFormik } from './ProfileDataForm';
import { FaGithub, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'


const ProfileInfo = ({ profile, isOwner, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    const onEditMode = () => setEditMode(true);

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    return (
        <div className={s.aboutMe}>
            <div className={s.title}>
                Profile Info
                {isOwner && <button className={s.editBtn} onClick={onEditMode}><MdEdit /></button>}
            </div>
            {editMode
                // ? <ProfileDataReduxForm initialValues={profile} isOwner={isOwner} onSubmit={onSubmit} />
                ? <ProfileDataFormik profile={profile} onSubmit={onSubmit} />
                : <ProfileData profile={profile} isOwner={isOwner} onEditMode={() => { setEditMode(true) }} />}
        </div>
    )
}

export const ProfileData = ({ profile }) => {
    return <>
        <div>
            <h4>About me</h4>
            {profile.aboutMe}
        </div>
        <div><b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
        <div>
            <h4>Professional skills </h4>
            {profile.lookingForAJobDescription}
        </div>
        <SocialMedia profile={profile} />
    </>
}

const SocialMedia = ({ profile }) => {

    return (
        <div className={s.socialMedia}>
            <a href={profile.contacts.github
                ? profile.contacts.github : '#'} target='_blank'><FaGithub /></a>
            <a href={profile.contacts.facebook
                ? profile.contacts.facebook : '#'} target='_blank'><FaFacebookF /></a>
            <a href={profile.contacts.twitter
                ? profile.contacts.twitter : '#'} target='_blank'><FaTwitter /></a>
            <a href={profile.contacts.youtube
                ? profile.contacts.youtube : '#'} target='_blank'><FaYoutube /></a>

        </div>
    )
}
// const Contact = ({ contactTitle, contactValue }) => {
//     return <div className={s.contacts}>
//         <b>{contactTitle}:</b> {contactValue}
//     </div>
// }
/* <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
               return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
           }
           )} */


export default ProfileInfo;
