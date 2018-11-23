import React, { Component } from 'react'
import styled from 'styled-components'
import InputCard from '../components/InputCard'
import IdeaTextarea from './IdeaTextarea'
import Headline from './Headline'

const Wrapper = styled.section`
  display: grid;
  grid-gap: 25px;

  .square {
    color: yellow;
  }
`

export default class Project extends Component {
  state = {
    job: this.load()
  }
  addToDo = () => {
    this.setState({
      job: 'Hello world'
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name + 'Input']: event.target.value })
  }

  save() {
    localStorage.setItem('note-app--input', JSON.stringify(this.state.job))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('note-app--input')) || []
    } catch (err) {
      return []
    }
  }

  render() {
    this.save()
    const { job } = this.state
    return (
      <Wrapper>
        <span onClick={this.addToDo}>{job}</span>
        <Headline text="Collective Notebook" />
        <InputCard />
        <IdeaTextarea />
      </Wrapper>
    )
  }
}
