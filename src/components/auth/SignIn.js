import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

import styled from 'styled-components'

const Wrapper = styled.section`
  background: white;
  border-radius: 12px;
  box-shadow: 5px 5px 10px #48484847;
  padding: 0 22px 10px 22px;
  min-width: 330px;
  margin-bottom: 50px;
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

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to="/" />
    return (
      <Wrapper>
        <StyledForm className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <StyledButton>Login</StyledButton>
            <div className="center red-text">
              {authError && <p>{authError}</p>}
            </div>
          </div>
        </StyledForm>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
