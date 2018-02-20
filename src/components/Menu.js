import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MenuItem from './menu-item'

class Menu extends Component {
  constructor() {
    super()

    this.state = {
      menuItems: [
        {
          name: 'Bagel',
          description: 'A homemade bagel with unsalted butter',
          price: 2.99,
        },
        {
          name: 'Bowl of Cereal',
          description: 'A bowl of cereal, our choice',
          price: 21.99,
        },
        {
          name: 'Fried egg and toast',
          description:
            'A fried egg, done your way with two sclices of our famous Ontario toast',
          price: 4.99,
        },
        {
          name: 'Bacon and Eggs',
          description: 'Two eggs, 4 Bacons, 2 Toasts',
          price: 4.99,
        },
        {
          name: 'Sausage and Eggs',
          description: 'Two eggs, 4 Sausages, 2 Toasts',
          price: 4.99,
        },
        {
          name: 'Eggs Benedict',
          description: 'Our Homemade Hollondaise sauce on two over easy eggs places on an English muffin and topped with salmon and capers',
          price: 9.99
        }
      ],
    }
  }

  render(props) {
    return (
      <div className="menu">
        <h1>Our Menu</h1>
        {this.state.menuItems.map((menuItem, i) => (
          <MenuItem
            key={i}
            name={menuItem.name}
            description={menuItem.description}
            price={menuItem.price}
          />
        ))}
      </div>
    )
  }
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default Menu
