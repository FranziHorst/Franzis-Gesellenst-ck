import React, { Component } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  width: 340px;

  .row1 {
    align-items: center;
    background: #df4958;
    border-radius: 12px 12px 0 0;
    box-shadow: 5px 5px 10px #48484847;
    color: white;
    display: flex;
    justify-content: flex-start;
    padding-left: 22px;
    padding-right: 22px;

    h2 {
      font-family: 'Niramit', sans-serif;
      font-size: 16px;
      font-weight: 700;
    }
  }

  .row2 {
    background: white;
    border-radius: 0 0 12px 12px;
    box-shadow: 5px 5px 10px #48484847;
    justify-content: center;
    padding-bottom: 22px;
    padding-left: 22px;
    padding-right: 22px;

    p {
      font-family: 'Niramit', sans-serif;
      font-size: 16px;
      font-weight: 200;
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
