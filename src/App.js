import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Home from './components/projects/Home'
import Project from './components/projects/Project'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* <Route exact path="/" render={() => <Home />} /> */}
            <Route path="/project" render={() => <Project />} />
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
          <Navbar />
        </div>
      </BrowserRouter>
      // <Router>
      //   <div>
      //     <Route exact path="/" render={() => <Home />} />
      //     <Route path="/project" render={() => <Project />} />
      //   </div>
      // </Router>
    )
  }
}
