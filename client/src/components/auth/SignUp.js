import React, { Component } from 'react'
import { Form, Field, reduxForm, getFormValues } from 'redux-form'
import { connect } from 'react-redux'

import * as actions from '../../actions'

import TextField from '../UI/TextField'
import ErrorMsg from '../UI/ErrorMsg'

class SignUp extends Component {

  handleFormSubmit({ email, password }) {
    this.props.signUpUser({ email, password })
  }

  render () {
    const { handleSubmit, errorMessage } = this.props

    return (
      <Form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
        <Field name="email" component={ TextField } label="Email:"/>
        <Field name="password" component={ TextField } type="password" label="Password:"/>

        <ErrorMsg errorMessage={ this.props.errorMessage }/>

        <button action="submit" className="btn btn-primary">Sign Up</button>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  formValues: getFormValues('signup')(state),
  errorMessage: state.auth.error
});
const formConfiguration = {
  form: 'signup',
  fields: ['email', 'password']
}

export default connect(mapStateToProps, actions)(reduxForm(formConfiguration)(SignUp))
