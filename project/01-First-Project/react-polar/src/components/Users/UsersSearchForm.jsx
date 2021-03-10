import React from 'react';
import { Field, Form, Formik } from 'formik';

const usersSearchFormValidate = (values) => {
    const errors = {};
    return errors;
}
const UsersSearchForm = () => {
    const submitForm = (values, { setSubmitting }) => {

    }
    return <div>
        <Formik
            initialValues={{ term: '' }}
            validate={usersSearchFormValidate}
            onSubmit={submitForm}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="term" />
                    <button type="submit" disabled={isSubmitting}>
                        Search
           </button>
                </Form>
            )}
        </Formik>
    </div>
}

export default UsersSearchForm;