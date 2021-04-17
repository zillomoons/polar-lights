import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utilities/validators';
import { Textarea } from '../Common/FormsControls/FormsControls';
import NavbarContainer from '../Navbar/NavbarContainer';

const maxLength50 = maxLengthCreator(50);

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder='Enter your message'
                    validate={[required, maxLength50]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({
    form: "DialogsAddMessageForm"
})(addMessageForm)

const Dialogs = (props) => {
    let dialogsElements =
        props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} photo={d.photo} />);
    let messagesElements =
        props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    };

    return (
        <>
            <NavbarContainer />
            <div className={s.dialogs}>

                <div className={s.dialogItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>
                        {messagesElements}
                    </div>
                </div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </>
    );
}

export default Dialogs;