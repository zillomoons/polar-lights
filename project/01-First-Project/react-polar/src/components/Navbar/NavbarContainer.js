import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/authReducer'
import Navbar from './Navbar';

class NavbarContainer extends React.Component {
    render() {
        return <Navbar {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { logOut })(NavbarContainer);