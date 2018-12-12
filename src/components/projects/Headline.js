import React, { Component } from 'react'
import styled from 'styled-components'

export const Headline1 = styled.h1`
  font-family: 'Allerta Stencil', sans-serif;
  font-size: 27px;
  text-align: center;
  margin: 17px;
  color: white;
`

export const HeadlineWrapper = styled.section`
  align-items: center;
  background: linear-gradient(10deg, #ff5f8a 37%, #ffc100 85%);
  border-radius: 12px;
  box-shadow: 5px 5px 10px #3333336b;
  display: flex;
  justify-content: center;
`

export default class Headline extends Component {
  render() {
    return (
      <HeadlineWrapper>
        <Headline1>{this.props.text}</Headline1>
      </HeadlineWrapper>
    )
  }
}
