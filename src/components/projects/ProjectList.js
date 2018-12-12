import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled(Link)`
  background: white;
  border-radius: 12px;
  box-shadow: 5px 5px 10px #48484847;
  padding: 22px 22px 37px 22px;
  display: grid;
  grid-gap: 20px;
`

const ProjectList = ({ projects }) => {
  return (
    <React.Fragment>
      {projects &&
        projects.map(project => {
          return (
            <Wrapper to={'/project/' + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Wrapper>
          )
        })}
    </React.Fragment>
  )
}

export default ProjectList
