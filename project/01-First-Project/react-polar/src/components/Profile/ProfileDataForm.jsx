import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../Common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';
import style from '../Common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({ initialValues, handleSubmit, error }) => {
    return <form onSubmit={handleSubmit} >
        <div><button>Save</button></div>
        {error && <div className={style.loginError}>{error}</div>}
        <div>
            <b>Name:</b> {createField('Enter your name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job: </b> {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </div>
        <div>
            <b>Skills: </b> {createField('Enter your skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About me: </b> {createField('Tell us about yourself', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(initialValues.contacts).map(key => {
                return <div key={key} className={s.contacts}>
                    <b>{key}:</b> {createField(key, 'contacts.' + key, [], Input)}
                </div>
            }
            )}
        </div>
    </form>
}
const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataReduxForm;