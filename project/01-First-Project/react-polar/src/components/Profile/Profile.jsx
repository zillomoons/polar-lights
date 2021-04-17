import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import NavbarContainer from '../Navbar/NavbarContainer'

const Profile = (props) => {
    return (
        <>
            <NavbarContainer />
            <ProfileInfo profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile} />
            <MyPostsContainer store={props.store} />
        </>
    );
}

export default Profile;