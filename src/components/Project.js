import React, { Component } from 'react'
import styled from 'styled-components'
import InputCard from '../components/InputCard'
import IdeaTextarea from './IdeaTextarea'
import Headline from './Headline'
import ToggleButton from './ToggleButton'

const Wrapper = styled.section`
  display: grid;
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
      startDate: new Date(),
      isDisabled: false
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
    const {
      problemTextareaInput,
      startDate,
      ideaTextareaInput
    } = this.state.inputs
    return (
      <Wrapper>
        <Headline text="Collective Notebook" />

        <InputCard
          startDate={this.state.startDate}
          handleDateChange={this.handleDateChange}
          handleChange={this.handleChange}
          inputValue={problemTextareaInput}
          dateValue={startDate}
          isDisabled={this.state.isDisabled}
        />
        <IdeaTextarea
          handleChange={this.handleChange}
          inputIdeaValue={ideaTextareaInput}
          isDisabled={this.state.isDisabled}
        />
        <ToggleButton
          onClick={() => this.setState({ isDisabled: !this.state.isDisabled })}
        />
      </Wrapper>
    )
  }
}
