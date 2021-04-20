import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MyTextInput } from '../Common/FormsControls/MyForms'
import { LogoImg } from '../Navbar/NavbarElements'
import logo from '../../assets/images/logo.png';
import s from './styleSignin.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logIn } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom';



const SigninForm = ({ onSubmit, captchaUrl }) => {
    return (
        <div className={s.container}>
            <Link className={s.logoLink} to='/'><LogoImg src={logo} alt='logo' /></Link>
            <div className={s.formWrap}>

                <Formik className={s.formContent}
                    initialValues={{
                        email: '',
                        password: '',
                        rememberMe: false,
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .required('Required'),

                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        onSubmit(values)
                    }}
                >
                    <Form className={s.loginForm}>
                        <h1>Sign in to your account</h1>
                        <MyTextInput
                            label='Email'
                            name='email'
                            type='email'
                        />
                        <MyTextInput
                            label='Password'
                            name='password'
                            type='password'
                        />

                        <MyCheckbox className={s.checkbox} name='rememberMe'>
                            Remember me
                    </MyCheckbox>

                        <button type='submit'>Sign in</button >
                        {/* <button type='reset' onClick={Formik.handleReset}>Reset</button> */}
                    </Form>
                </Formik>

            </div>
        </div>
    )
}

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <>
        <SigninForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { logIn })(Login);
