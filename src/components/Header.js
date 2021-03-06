import React from 'react'
import PropTypes from 'prop-types'

import Navigation from './Navigation'

const Header = props => (
  <div className="header">
    <h1>{props.name}</h1>
    <Navigation />
  </div>
)

Header.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Header
