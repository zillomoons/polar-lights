import React from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 15122;
        }
        usersAPI.setProfile(userId).then(data => {
            this.props.setUserProfile(data);
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({ profile: state.profilePage.profile });

let WithUrlProfileContainer = withRouter(ProfileContainer); // creating container component with URL data

export default connect(mapStateToProps, { setUserProfile })(WithUrlProfileContainer); //creating container component that connects with STORE