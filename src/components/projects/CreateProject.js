import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import InputCard from './InputCard'
import IdeaTextarea from './IdeaTextarea'
import Headline from './Headline'
import ToggleButton from './ToggleButton'

const Wrapper = styled.section`
  display: grid;
  grid-gap: 20px;
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
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
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
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>

        <Headline text="Collective Notebook" />

        <InputCard
        // startDate={this.state.startDate}
        // handleDateChange={this.handleDateChange}
        // handleChange={this.handleChange}
        // inputValue={problemTextareaInput}
        // dateValue={startDate}
        // isDisabled={this.state.isDisabled}
        />
        <IdeaTextarea
        // handleChange={this.handleChange}
        // inputIdeaValue={ideaTextareaInput}
        // isDisabled={this.state.isDisabled}
        />
        <ToggleButton
        // isDisabled={this.state.isDisabled}
        // onClick={() =>
        //   this.setState({ isDisabled: !this.state.isDisabled })
        // }
        />
      </div>
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
