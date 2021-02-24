import React from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 15122;
        }
        this.props.setProfile(userId);
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({ profile: state.profilePage.profile });

let WithUrlProfileContainer = withRouter(AuthRedirectComponent); // creating container component with URL data

export default connect(mapStateToProps, { setProfile })(WithUrlProfileContainer); //creating container component that connects with STORE