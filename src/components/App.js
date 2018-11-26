import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Home from './Home'
import Project from './Project'

export default class App extends Component {
  state = {
    showProject: false
  }

  toggleShowProject = () => {
    this.setState({
      showProject: !this.state.showProject
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <Home showProject={this.state.showProject} />}
          />

          <Route
            path="/project"
            render={() => (
              <Project
                showProject={this.state.showProject}
                onToggle={this.toggleShowProject}
              />
            )}
          />
        </div>
      </Router>
    )
  }
}
