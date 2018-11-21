import React, { Component } from 'react'
import Card from './Card'

export default class SimpleCard extends Component {
  render() {
    return (
      <Card render={() => <h2>{this.props.title}</h2>}>
        {this.props.children}
      </Card>
    )
  }
}
