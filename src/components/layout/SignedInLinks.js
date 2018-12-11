import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import styled from 'styled-components'

const HomeIcon = styled.img`
  height: 30px;
`
const LogoutIcon = styled.img`
  height: 30px;
  margin-top: 4px;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserButton = styled(NavLink)`
  display: inline-block;
  color: #fe6c8b;
  width: 40px;
  font-weight: 600;
  height: 40px;
  line-height: 31px;
  padding: 0;
  border: 3px solid #ffc200;
  border-radius: 50%;
  font-size: 14px;
  font-family: 'Niramit', sans-serif;
  vertical-align: middle;
`

const SignedInLinks = props => {
  return (
    <React.Fragment>
      <StyledLink to="/create">
        <HomeIcon src="./images/project.svg" />
      </StyledLink>

      <button onClick={props.signOut}>
        <LogoutIcon src="./images/logout.svg" />
      </button>

      <div>
        <UserButton to="/">{props.profile.initials}</UserButton>
      </div>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks)
