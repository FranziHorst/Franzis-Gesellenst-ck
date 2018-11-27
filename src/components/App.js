import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Home from './Home'
import Project from './Project'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/project" render={() => <Project />} />
        </div>
      </Router>
    )
  }
}
