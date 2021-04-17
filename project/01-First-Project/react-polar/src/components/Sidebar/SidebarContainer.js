import React from 'react';
import { connect } from "react-redux";
import Sidebar from '.';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
        // sidebarPage: state.sidebar
    }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
