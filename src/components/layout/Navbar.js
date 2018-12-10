import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = props => {
  const { auth, profile } = props
  // console.log(auth);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  )

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Home
          {/* <img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" />
          <img src="./home2.png" /> */}
        </Link>
        {links}
      </div>
    </nav>
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
