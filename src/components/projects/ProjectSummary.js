import React from 'react'
import moment from 'moment'

import styled from 'styled-components'

const cardContent = styled.div`
  padding: 24px 0 24px 0;
`

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <cardContent className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </cardContent>
    </div>
  )
}

export default ProjectSummary
