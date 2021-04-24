import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../Common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';
import style from '../Common/FormsControls/FormsControls.module.css'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { MyCheckbox, MyTextInput } from '../Common/FormsControls/MyForms';


// const ProfileDataForm = ({ initialValues, handleSubmit, error }) => {

//     return (
//         <>

//             <form onSubmit={handleSubmit} >

//                 <div>
//                     <b>Name:</b> {createField('Enter your name', 'fullName', [], Input)}
//                 </div>
//                 <div>
//                     <b>About me: </b> {createField('Tell us about yourself', 'aboutMe', [], Textarea)}
//                 </div>
//                 <div>
//                     <b>Looking for a job: </b> {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
//                 </div>
//                 <div>
//                     <b>Professional skills: </b> {createField('Enter your skills', 'lookingForAJobDescription', [], Textarea)}
//                 </div>

//                 <div>
//                     <b>Social links: </b> {Object.keys(initialValues.contacts).map(key => {
//                         return <div key={key} className={s.contacts}>
//                             <b>{key}:</b> {createField(key, 'contacts.' + key, [], Input)}
//                         </div>
//                     }
//                     )}
//                 </div>
//                 <div><button>Save</button></div>
//                 {error && <div className={style.loginError}>{error}</div>}
//             </form>
//         </>
//     )
// }
// export const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

const initialValues = {
    fullName: '',
    aboutMe: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
    contacts: {
        facebook: '',
        website: '',
        instagram: '',
        twitter: '',
        vk: '',
        youtube: '',
        github: '',
        mainLink: ''
    }
}

export const ProfileDataFormik = ({ profile, onSubmit, error }) => {
    return (
        <Formik
            initialValues={profile ? profile : initialValues}
            enableReinitialize
            validationSchema={Yup.object({
                fullName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                aboutMe: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                lookingForAJobDescription: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required')
            })}
            onSubmit={(values) => { onSubmit(values) }}
        >
            <Form className={s.profileForm}>
                <MyTextInput
                    label='Name'
                    name='fullName'
                    type='text'
                />
                <MyTextInput
                    label='About me'
                    name='aboutMe'
                    type='text'
                />
                <MyCheckbox name='lookingForAJob'>
                    Looking for a job
                </MyCheckbox>
                <MyTextInput
                    label='Professional Skills'
                    name='lookingForAJobDescription'
                    type='text'
                />

                Social links: {Object.keys(initialValues.contacts).map(key => {
                    return (
                        <div key={key}>
                            {key}<Field name={`contacts[${key}]`} type='text' />
                        </div>
                    )
                })}

                <button type='submit'>Submit</button>
                {error && <div className={style.loginError}>{error}</div>}
            </Form>

        </Formik>
    )
}