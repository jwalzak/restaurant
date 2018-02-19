import React from 'react'
import PropTypes from 'prop-types'

const MenuItem = props =>
  (
    <div className="menu__items">
      <p className="food-name">{props.name}</p>
      <p className="food-desc">{props.description}</p>
      <p className="price">{props.price}</p>
    </div>
  )
MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
export default MenuItem
