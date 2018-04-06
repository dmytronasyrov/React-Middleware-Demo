import React, { Component } from 'react'
import { Form, Field, reduxForm, getFormValues } from 'redux-form'
import { connect } from 'react-redux'

import * as actions from '../../actions'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <fieldset className="form-group">
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} className="form-control"/>
    {touched && error && <span>{error}</span>}
  </fieldset>
);

class SignIn extends Component {

  handleFormSubmit({ email, password }) {
    this.props.signInUser({ email, password })
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <Form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
        <Field name="email" component={ renderField } label="Email:"/>
        <Field name="password" component={ renderField } label="Password:"/>
        <button action="submit" className="btn btn-primary">Sign In</button>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  formValues: getFormValues('signin')(state),
});
const formConfiguration = {
  form: 'signin',
  fields: ['email', 'password']
}

export default connect(mapStateToProps, actions)(reduxForm(formConfiguration)(SignIn))
