import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <div className="header">
    <h1>{props.name}</h1>
  </div>
)

Header.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Header
