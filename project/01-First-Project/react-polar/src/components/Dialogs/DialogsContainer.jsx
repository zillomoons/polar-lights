import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

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
        isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;