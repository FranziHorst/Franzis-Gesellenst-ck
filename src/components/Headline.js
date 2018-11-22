import React, { Component } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.section`
  justify-content: center;
  display: flex;
`
export const Headline1 = styled.h1`
  font-family: 'Allerta Stencil', sans-serif;
  font-size: 33px;
  text-align: center;
`

export default class Headline extends Component {
  render() {
    return (
      <Wrapper>
        <Headline1>{this.props.text}</Headline1>
      </Wrapper>
    )
  }
}
