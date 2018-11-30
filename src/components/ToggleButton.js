import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const StyledButton = styled(Button)`
  font-family: 'Niramit', sans-serif !important;
  font-size: 14px !important;
  background: #ffc200;
  border-radius: 12px !important;
  font-weight: 600 !important;
  border: 0 !important;
  margin: 22px !important;
  &.selected {
    background: #a5a5a5;
  }
`

export const Span = styled.span`
  margin-right: 5px;
`

export default class ToggleButton extends Component {
  state = { isToggleOn: true }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
    this.props.onClick()
  }

  render() {
    return (
      <StyledButton
        className={this.props.isToggle ? true : 'selected'}
        variant="contained"
        color="secondary"
        onClick={this.handleClick}
      >
        {this.state.isToggleOn ? 'close project' : 'project is closed'}
      </StyledButton>
    )
  }
}
