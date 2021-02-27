import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={"input"} name={"email"} placeholder={"Email"} />
                </div>
                <div>
                    <Field component={"input"} name={"password"} placeholder={"Password"} />
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"} />remember me
                    </div>
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
        console.log(formData);
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;