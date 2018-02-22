import React from 'react'
import PropTypes from 'prop-types'

const MenuItem = props => (
  <div className="menu__items">
    <h3 className="food-name">{props.name}</h3>
    {/* <p className="food-desc">{props.description}</p> */}
    <p className="price">{props.price}</p>
  </div>
)

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}
export default MenuItem
