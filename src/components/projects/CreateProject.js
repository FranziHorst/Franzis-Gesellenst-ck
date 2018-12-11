import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`
  background: white;
  border-radius: 12px;
  box-shadow: 5px 5px 10px #48484847;
  padding: 0 22px 10px 22px;
  padding-top: 20px;
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

const StyledForm = styled.form`
  margin: 0;
`
class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    // console.log(this.state);
    this.props.createProject(this.state)
    this.props.history.push('/')
  }
  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to="/signin" />
    return (
      <Wrapper>
        <StyledForm className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <StyledButton>Create</StyledButton>
          </div>
        </StyledForm>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject)
