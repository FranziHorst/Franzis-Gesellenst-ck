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
  font-family: 'Niramit', sans-serif;
  font-size: 20px;
  margin-top: 1px;
  outline: none;
  width: 100%;
  padding-left: 10px;
`

export const Wrapper = styled.div`
  display: flex;
  padding: 22px;
`
export const StyledHeadline3 = styled.h3`
  font-family: 'Niramit', sans-serif;
  font-size: 23px;
  font-weight: 700;
  margin: 0;
`

export default class InputCard extends Component {
  render() {
    return (
      <Card
        render={() => (
          <StyledTextarea
            value={this.props.inputValue}
            name="problemTextarea"
            onChange={this.props.handleChange}
            placeholder="type your Problem here..."
          />
        )}
      >
        <Wrapper>
          <StyledHeadline3>Deadline:</StyledHeadline3>
          <StyledInput
            value={this.props.dateValue}
            withPortal
            dateFormat="dd/MM/yyyy"
            selected={this.props.startDate}
            onChange={this.props.handleDateChange}
            minDate={new Date()}
          />
        </Wrapper>
      </Card>
    )
  }
}
