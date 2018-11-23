import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Home from './Home'
import Project from './Project'

export default class App extends Component {
  state = {
    showDoneTodos: false
  }

  toggleShowDonetodos = () => {
    this.setState({
      showDoneTodos: !this.state.showDoneTodos
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <Home showDoneTodos={this.state.showDoneTodos} />}
          />

          <Route
            path="/project"
            render={() => (
              <Project
                showDoneTodos={this.state.showDoneTodos}
                onToggle={this.toggleShowDonetodos}
              />
            )}
          />
        </div>
      </Router>
    )
  }
}
