import React from 'react'
import s from './HeroProfile.module.css'
import banner from '../../../assets/images/banner.jpg'
import ProfileInfo from '../ProfileInfo'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from '../ProfileStatusWithHooks'
import { MdAddAPhoto } from 'react-icons/md'



const HeroProfile = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    return (
        <>
            <img className={s.heroBg} src={banner} alt='banner' />
            <ProfileIntro
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                isOwner={isOwner}
                savePhoto={savePhoto} />
        </>
    )
}

const ProfileIntro = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

    const onProfilePhotoChanged = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <section className={s.profileIntro}>
            <div className={s.profileCol1}>
                <img src={profile.photos.large || userPhoto} className={s.profilePhoto} />
                {isOwner &&
                    <label htmlFor={'file-upload'} className={s.customFileUpload}>
                        <MdAddAPhoto />
                        <input id={'file-upload'} type={'file'} onChange={onProfilePhotoChanged} />
                    </label>}
                <h2>{profile.fullName}</h2>
            </div>
            <div className={s.profileCol2}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
            </div>
        </section>
    )
}

export default HeroProfile

