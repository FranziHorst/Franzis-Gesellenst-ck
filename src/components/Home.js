import React, { Component } from 'react'
import uid from 'uid'

import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 4px 40px;
  grid-auto-rows: 32px;
`

export default class Home extends Component {
  render() {
    return <div>Hello world</div>
  }
}
