import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SignupIcon = styled.img`
  height: 30px;
  margin-top: 4px;
`
const LoginIcon = styled.img`
  height: 30px;
  margin-top: 4px;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <StyledLink to="/signup">
        <SignupIcon src="./images/signup.svg" />
      </StyledLink>

      <StyledLink to="/signin">
        <LoginIcon src="./images/login.svg" />
      </StyledLink>
    </React.Fragment>
  )
}

export default SignedOutLinks
