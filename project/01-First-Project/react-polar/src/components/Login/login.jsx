import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utilities/validators';
import { Input } from '../Common/FormsControls/FormsControls';
import { logIn } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom';
import style from '../Common/FormsControls/FormsControls.module.css'

const maxLength20 = maxLengthCreator(20);

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field component={Input} name={"email"}
                        validate={[required, maxLength20]} placeholder={"Email"} />
                </div>
                <div>
                    <Field component={Input} name={"password"} type="password"
                        validate={[required, maxLength20]} placeholder={"Password"} />
                </div>
                <div>
                    <Field component={'input'} name={"rememberMe"} type={"checkbox"} />remember me
                    </div>
                {error && <div className={style.loginError}>
                    {error}
                </div>
                }
                <div>
                    <button>Sign in</button>
                </div>
            </form>
        </div>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { logIn })(Login);