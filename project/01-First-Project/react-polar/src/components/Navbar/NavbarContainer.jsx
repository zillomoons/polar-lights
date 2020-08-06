import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";

// const NavbarContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 return <Navbar state={state.sidebar}/>
//             }
//             }
//         </StoreContext.Consumer>
//     );
// }
let mapStateToProps = (state) => {
    return {
        sidebarPage: state.sidebar
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
