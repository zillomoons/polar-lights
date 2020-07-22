import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar} />
                <div className='app-wrapper-content'>
                  <Route path='/profile' render={ () => <Profile state={props.state.profilePage} />} />
                  <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />} />
                  <Route path='/news' component={News} />
                  <Route path='/music' component={Music} />
                  <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
