import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input } from '../Common/FormsControls/FormsControls';

const ProfileDataForm = ({ profile }) => {
    return <form>
        <div><button>Save</button></div>
        <div><b>Name:</b> {createField('Full name', 'fullName', [], Input)}</div>
        <p><b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}</p>
        <p> {profile.lookingForAJob && <div><b>Skills: </b> {profile.lookingForAJobDescription}</div>} </p>
        <p>
            {/* <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            }
            )} */}
        </p>
    </form>
}
const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataReduxForm;