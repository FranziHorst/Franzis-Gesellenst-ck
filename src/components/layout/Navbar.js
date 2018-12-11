import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  display: grid;
  background: #262742;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
`

const HomeIcon = styled.img`
  height: 35px;
`
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Navbar = props => {
  const { auth, profile } = props
  // console.log(auth);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  )

  return (
    <Wrapper>
      <StyledLink to="/cnb">
        <HomeIcon src="./images/home.svg" />
      </StyledLink>
      {links}
    </Wrapper>
  )
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
