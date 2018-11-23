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
  state = this.load()

  handleDateChange = date => {
    this.setState(
      {
        startDate: date
      },
      oldState => {
        this.save()
      }
    )
  }

  handleChange = event => {
    this.setState(
      {
        inputs: {
          ...this.state.inputs,
          [event.target.name + 'Input']: event.target.value
        }
      },
      oldState => {
        this.save()
      }
    )
  }

  save() {
    localStorage.setItem('note-app--date', JSON.stringify(this.state))
  }

  load() {
    const defaultState = {
      inputs: [],
      startDate: new Date()
    }

    try {
      const data =
        JSON.parse(localStorage.getItem('note-app--date')) || defaultState
      data.startDate = new Date(data.startDate)
      return data
    } catch (err) {
      return defaultState
    }
  }

  render() {
    return (
      <Wrapper>
        <Headline text="Collective Notebook" />
        <InputCard
          startDate={this.state.startDate}
          handleDateChange={this.handleDateChange}
          handleChange={this.handleChange}
          inputValue={this.state.inputs.problemTextareaInput}
          dateValue={this.state.inputs.startDate}
        />
        <IdeaTextarea
          handleChange={this.handleChange}
          inputIdeaValue={this.state.inputs.ideaTextareaInput}
        />
      </Wrapper>
    )
  }
}
