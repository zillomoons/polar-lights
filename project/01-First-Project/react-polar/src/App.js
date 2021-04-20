import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import News from "./pages/News"
import Settings from "./pages/Settings";
import UsersContainer from "./components/Users/UsersContainer";
// import Login from './components/Login/login';
import Login from './components/Login/signin'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from '../src/redux/appReducer';
import Preloader from './components/Common/Preloader/preloader';
import store from './redux/redux-store';
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import { Suspense } from 'react';
import suspensedComponent from './hoc/withSuspense';
import Home from './pages/HomePage';

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.isInitialized) {
            return <Preloader />
        }
        return (
            <>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/profile/:userId?' render={suspensedComponent(ProfileContainer)} />
                    <Route path='/dialogs' render={suspensedComponent(DialogsContainer)} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/news' component={News} />
                    <Route path='/settings' component={Settings} />
                </Switch>
            </>
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
            <HashRouter>
                <AppContainer />
            </HashRouter>
        </Provider>
    </React.StrictMode>
}

export default AppSuperContainer;
