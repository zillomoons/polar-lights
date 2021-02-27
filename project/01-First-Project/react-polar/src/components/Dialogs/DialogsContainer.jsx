import React from 'react';
import { addMessage } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Dialogs)

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                 let state = store.getState();
//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 };
//                 let onMessageChange = (text) => {
//                     store.dispatch(updateNewMessageTextActionCreator(text))
//                 };
//                 return <Dialogs state={state} addMessage={addMessage}
//                                 updateNewMessageText={onMessageChange}/>
//             }
//             }
//         </StoreContext.Consumer>
//     );
// }
