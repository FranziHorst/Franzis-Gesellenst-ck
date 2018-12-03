import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Wrapper = styled.section`
  display: grid;
  min-width: 150px;
  margin-top: 20px;

  .header {
    align-items: center;
    background: #6ccfdc;
    border-radius: 12px 12px 0 0;
    box-shadow: 5px 5px 10px #48484847;
    color: white;
    display: flex;
    justify-content: flex-start;
    padding: 0 22px 0 22px;

    h2 {
      font-family: 'Niramit', sans-serif;
      font-size: 16px;
      font-weight: 700;
    }
  }

  .body {
    background: white;
    border-radius: 0 0 12px 12px;
    box-shadow: 5px 5px 10px #48484847;
    font-family: 'Niramit', sans-serif;
    font-size: 16px;
    font-weight: 200;
    justify-content: center;
    padding: 0 22px 10px 22px;
  }
`

export default class Card extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  }
  render() {
    return (
      <Wrapper>
        <header className="header">{this.props.render()}</header>
        <div className="body">{this.props.children}</div>
      </Wrapper>
    )
  }
}
