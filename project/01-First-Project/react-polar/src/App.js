import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <main className='app-wrapper'>
                <header className='header'>
                    <Header/>
                </header>
                <nav className='navbar'>
                    <NavbarContainer />
                </nav>
                <section className='main-content'>
                  <Route path='/profile' render={ () => <Profile />} />
                  <Route path='/dialogs' render={ () => <DialogsContainer />} />
                  <Route path='/users' render={ () => <UsersContainer />} />
                  <Route path='/news' component={News} />
                  <Route path='/music' component={Music} />
                  <Route path='/settings' component={Settings} />
                </section>
                <aside className='sidebar'>
                    <div>
                        Followers
                    </div>
                </aside>
            </main>
        </BrowserRouter>
    );
}

export default App;
