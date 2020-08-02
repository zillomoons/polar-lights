import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    let dialogsElements =
        props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements =
        props.state.messages.map(m => <Message message={m.message} id={m.id} /> );

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let newMessage = props.state.newMessageText;

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               <div>
                   {messagesElements}
               </div>
                <div>
                    <textarea  value={newMessage} onChange={onMessageChange} placeholder='Enter your message' />
                </div>
                <div>
                    <button onClick={ addMessage }>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;