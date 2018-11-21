import React, { Component } from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'
import Card from './Card'

export const StyledTextarea = styled(Textarea)`
  background: none;
  border: 0;
  color: white;
  font-family: 'Niramit', sans-serif;
  font-size: 20px;
  margin-bottom: 14px;
  margin-top: 14px;
  outline: none;
  width: 100%;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #ffffffb0;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #ffffffb0;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #ffffffb0;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #ffffffb0;
  }
`

export const StyledInput = styled.input`
  &[type='date'] {
    border: 0;
    font-family: 'Niramit', sans-serif;
    font-size: 20px;
    margin-top: 1px;
    outline: none;
    width: 100%;
  }
`
export const StyledHeadline3 = styled.h3`
  font-family: 'Niramit', sans-serif;
  font-size: 23px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
`

export default class InputCard extends Component {
  render() {
    return (
      <Card
        render={() => (
          <StyledTextarea placeholder="type your Problem here..." />
        )}
      >
        <StyledHeadline3>Deadline:</StyledHeadline3>
        <StyledInput type="date" placeholder="20.10.2018" />
      </Card>
    )
  }
}
