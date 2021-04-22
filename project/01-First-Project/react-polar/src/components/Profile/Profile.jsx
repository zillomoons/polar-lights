import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import NavbarContainer from '../Navbar/NavbarContainer'
import SidebarContainer from '../Sidebar/SidebarContainer';
import HeroProfile from './HeroProfile/HeroProfile'

const Profile = (props) => {
    return (
        <>
            <NavbarContainer />
            <HeroProfile profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile} />
            {/* <ProfileInfo profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile} /> */}
            <MyPostsContainer store={props.store} />
            <SidebarContainer />
        </>
    );
}

export default Profile;