import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const StyledButton = styled(Button)`
  background: #33d211 !important;
  border-radius: 12px !important;
  border: 0 !important;
  font-family: 'Niramit', sans-serif !important;
  font-size: 14px !important;
  font-weight: 600 !important;

  &.selected {
    background: #a5a5a5 !important;
  }
`

export const Span = styled.span`
  margin-right: 5px;
`

export default class ToggleButton extends Component {
  render() {
    return (
      <StyledButton
        className={this.props.isDisabled ? 'selected' : ''}
        variant="contained"
        color="secondary"
        onClick={this.props.onClick}
      >
        {this.props.isDisabled ? 'project is closed' : 'close project'}
      </StyledButton>
    )
  }
}
