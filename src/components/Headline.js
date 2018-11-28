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
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 22px;
  border-radius: 12px;
  background: linear-gradient(10deg, #fe6b8b 30%, #ff8e53 85%);
  box-shadow: 5px 5px 10px #3333336b;
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
