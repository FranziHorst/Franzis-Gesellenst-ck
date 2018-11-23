import React, { Component } from 'react'
import styled from 'styled-components'

export const Headline1 = styled.h1`
  font-family: 'Allerta Stencil', sans-serif;
  font-size: 33px;
  text-align: center;
  margin-bottom: 10px;
`

export default class Headline extends Component {
  render() {
    return <Headline1>{this.props.text}</Headline1>
  }
}
