import React, { Component } from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'
import Card from './Card'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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

export const StyledInput = styled(DatePicker)`
  border: 0;
  color: #42d2de;
  font-family: 'Niramit', sans-serif;
  font-size: 20px;
  margin-top: 1px;
  outline: none;
  padding-left: 10px;
  width: 100%;
  &:disabled {
    background: white;
    color: grey;
    margin-top: 1px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 14px;
  margin-top: 14px;
`
export const StyledHeadline3 = styled.h3`
  font-family: 'Niramit', sans-serif;
  font-size: 23px;
  font-weight: 700;
  margin: 0;
`

export default class InputCard extends Component {
  render() {
    const {
      inputValue,
      handleChange,
      dateValue,
      startDate,
      handleDateChange
    } = this.props

    return (
      <Card
        render={() => (
          <StyledTextarea
            disabled={this.props.isDisabled}
            value={inputValue}
            name="problemTextarea"
            onChange={handleChange}
            placeholder="type your Problem here..."
          />
        )}
      >
        <Wrapper>
          <StyledHeadline3>Deadline:</StyledHeadline3>
          <StyledInput
            value={dateValue}
            disabled={this.props.isDisabled}
            withPortal
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={handleDateChange}
            minDate={new Date()}
          />
        </Wrapper>
      </Card>
    )
  }
}
