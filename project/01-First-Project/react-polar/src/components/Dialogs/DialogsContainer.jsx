import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };
                let newMessage = state.dialogsPage.newMessageText;
                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                };
                return <Dialogs state={state} addMessage={addMessage} newMessageText={newMessage}
                                updateNewMessageText={onMessageChange}/>
            }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;