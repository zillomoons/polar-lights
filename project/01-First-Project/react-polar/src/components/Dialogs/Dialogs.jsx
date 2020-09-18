import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements =
        props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
    let messagesElements =
        props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id} /> );
    let newMessage = props.dialogsPage.newMessageText;
    let onAddMessage = () => {
        props.addMessage();
    };
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
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
                    <button onClick={ onAddMessage }>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;