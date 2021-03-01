import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logOut } from '../../redux/authReducer'

class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { logOut })(HeaderContainer);
