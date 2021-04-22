import React from 'react'
import { Formik, Form, useField } from 'formik'
import s from './MyForms.module.css'

export const MyTextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.myTextInput}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props}
                className={hasError ? s.error : ''} />
            {hasError
                ? <div className={s.error}>{meta.error}</div>
                : null}
        </div>
    )
}

export const MyCheckbox = ({ children, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' })
    return (
        <div>
            <label>
                <input type='checkbox' {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error
                ? <div>{meta.error}</div>
                : null}
        </div>
    )
}

export const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error
                ? <div>{meta.error}</div>
                : null}
        </div>
    )
}
