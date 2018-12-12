import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  min-width: 150px;

  .header {
    align-items: center;
    background: #6ccfdc;
    border-radius: 12px 12px 0 0;
    box-shadow: 5px 5px 10px #48484847;
    color: white;
    display: flex;
    justify-content: flex-start;
    padding: 0 22px 0 22px;
  }

  .body {
    background: white;
    border-radius: 12px 12px 12px 12px;
    box-shadow: 5px 5px 10px #48484847;
    font-family: 'Niramit', sans-serif;
    font-size: 16px;
    font-weight: 200;
    justify-content: center;
    padding: 0 22px 20px 22px;
  }

  p {
    margin: 0;
  }
`

const ProjectSummary = ({ project }) => {
  return (
    <Wrapper>
      <h2>{project.title}</h2>
      <p>
        Posted by {project.authorFirstName} {project.authorLastName}
      </p>
      <p className="grey-text">
        {moment(project.createdAt.toDate()).calendar()}
      </p>
    </Wrapper>
  )
}

export default ProjectSummary
