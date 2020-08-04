import React from 'react';
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

const NavbarContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                return <Navbar state={state.sidebar}/>
            }
            }
        </StoreContext.Consumer>
    );
}

export default NavbarContainer;
