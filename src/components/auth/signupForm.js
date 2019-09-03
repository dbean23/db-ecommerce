import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

class SignUpForm extends Component {
    render () {
        return (
            <form className="sign-up-form">
                sign up
            </form>
        );
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;