import React, { Component } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  width: 340px;

  .row1 {
    background: #df4958;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 12px 12px 0 0;
    color: white;
    padding-left: 22px;
    padding-right: 22px;
    box-shadow: 5px 5px 10px #48484847;

    h2 {
      font-family: 'Niramit', sans-serif;
      font-size: 16px;
      font-weight: 700;
    }
  }

  .row2 {
    background: white;
    justify-content: center;
    border-radius: 0 0 12px 12px;
    padding-left: 22px;
    padding-right: 22px;
    padding-bottom: 22px;
    box-shadow: 5px 5px 10px #48484847;

    p {
      font-family: 'Niramit', sans-serif;
      font-weight: 200;
      font-size: 16px;
    }
  }
`

export default class Card extends Component {
  render() {
    return (
      <Wrapper>
        <div className="row1">
          <h2>{this.props.title}</h2>
        </div>
        <div className="row2">{this.props.children}</div>
      </Wrapper>
    )
  }
}
