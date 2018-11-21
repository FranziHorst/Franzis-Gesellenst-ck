import React, { Component } from 'react'
import styled from 'styled-components'
import InputCard from '../components/InputCard'
import IdeaTextarea from './IdeaTextarea'
import Headline from './Headline'

const Wrapper = styled.section`
  display: grid;
  grid-gap: 25px;
`

export default class Project extends Component {
  render() {
    return (
      <Wrapper>
        <Headline text="Collective Notebook" />
        <InputCard />
        <IdeaTextarea />
      </Wrapper>
    )
  }
}
