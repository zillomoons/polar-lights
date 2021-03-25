import React from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from '../src/redux/appReducer';
import Preloader from './components/Common/Preloader/preloader';
import store from './redux/redux-store';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.isInitialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <header className='header'>
                    <HeaderContainer />
                </header>
                <nav className='navbar'>
                    <NavbarContainer />
                </nav>
                <section className='main-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </section>
                <aside className='sidebar'>
                    <div>
                        Followers
                        </div>
                </aside>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized,
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const AppSuperContainer = (props) => {
    return <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
}

export default AppSuperContainer;
