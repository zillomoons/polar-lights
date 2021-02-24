import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

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

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)