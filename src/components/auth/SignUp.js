import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

import styled from 'styled-components'

const Wrapper = styled.section`
  background: white;
  border-radius: 12px;
  box-shadow: 5px 5px 10px #48484847;
  padding: 0 22px 10px 22px;
  min-width: 330px;
`
const StyledForm = styled.form`
  margin: 0;
`

const StyledButton = styled.button`
  background: #fe6c8b;
  height: 35px;
  width: 130px;
  border: 0;
  color: white;
  border-radius: 7px;
  font-family: 'Niramit', sans-serif;
`

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.signUp(this.state)
  }
  render() {
    const { auth, authError } = this.props
    if (auth.uid) return <Redirect to="/" />
    return (
      <Wrapper>
        <StyledForm className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <StyledButton>Sign Up</StyledButton>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </StyledForm>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
