import React, { Component } from 'react'
import { WiredTextarea } from 'wired-elements'

export default class WiredTextarea extends Component {
  render() {
    return (
      <div>
        <WiredTextarea placeholder="Enter text" rows="3" />
      </div>
    )
  }
}
