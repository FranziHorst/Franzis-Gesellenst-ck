import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import styled from 'styled-components'

const Wrapper = styled.section`
  grid-gap: 20px;
  display: grid;
  min-width: 330px;
  margin-bottom: 50px;
`

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props
    if (!auth.uid) return <Redirect to="/signin" />

    return (
      <Wrapper>
        <ProjectList projects={projects} />

        <Notifications notifications={notifications} />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ])
)(Dashboard)
