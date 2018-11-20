import React, { Component } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.h1`
  align-items: center;
  display: flex;
  font-family: 'Allerta Stencil', sans-serif;
  font-size: 33px;
  text-align: center;
`

export default class Headline extends Component {
  render() {
    return <Wrapper>{this.props.text}</Wrapper>
  }
}
