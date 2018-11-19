import React, { Component } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.section`
  font-size: 33px;
  font-family: 'Allerta Stencil', sans-serif;
  text-align: center;
`

export default class Headline extends Component {
  render() {
    return <Wrapper>Collective Notebook</Wrapper>
  }
}
