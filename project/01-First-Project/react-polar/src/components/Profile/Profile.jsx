import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import NavbarContainer from '../Navbar/NavbarContainer'
import SidebarContainer from '../Sidebar/SidebarContainer';
import HeroProfile from './HeroProfile/HeroProfile'
import Preloader from '../Common/Preloader/preloader'
import s from './Profile.module.css'


const Profile = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <>
            <NavbarContainer />
            <HeroProfile profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile} />
            <div className={s.mainSection}>
                <ProfileInfo profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    isOwner={props.isOwner}
                    savePhoto={props.savePhoto}
                    saveProfile={props.saveProfile} />
                <MyPostsContainer store={props.store} />
                <SidebarContainer />
            </div>
        </>
    );
}

export default Profile;