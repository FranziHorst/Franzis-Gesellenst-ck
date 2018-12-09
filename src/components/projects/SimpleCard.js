import React, { Component } from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

export default class SimpleCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <Card render={() => <h2>{this.props.title}</h2>}>
        {this.props.children}
      </Card>
    )
  }
}
