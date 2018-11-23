import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button'

export const StyledButton = styled(Button)`
  font-family: 'Niramit', sans-serif !important;
  font-size: 14px !important;
  background: #ffbf00 !important;
  border-radius: 12px !important;
  font-weight: 600 !important;
  border: 0 !important!;
  margin: 5px !important;
`

const ArrowIcon = (
  <FontAwesomeIcon icon={faChevronRight} className="filter-button" />
)

export default class MyButton extends Component {
  render() {
    return (
      <StyledButton
        data-cy="Specialbutton"
        className="ButtonEl"
        variant="contained"
        color="secondary"
        component={Link}
        to="/project"
      >
        {this.props.children}
        {ArrowIcon}
      </StyledButton>
    )
  }
}
