import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Rebase from 're-base'
import firebase from 'firebase'

import MenuItem from './menu-item'
import config from './config'

const app = firebase.initializeApp({
  apiKey: config.MAP_KEY,
  authDomain: config.MAP_DOMAIN,
  databaseURL: config.DB_URL,
  storageBucket: config.STORAGE_BUCKET,
  messagingSenderId: config.SENDER_ID,
})

const db = firebase.database(app)
const base = Rebase.createClass(db)

class Menu extends Component {
  constructor() {
    super()

    this.state = {
      menuItems: [],
    }
  }

  componentDidMount() {
    base.syncState('menu', {
      context: this,
      asArray: true,
      state: 'menuItems',
    })
  }

  loadMenu() {
    this.setState({
      menuItems: [],
    })
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
            category={menuItem.category}
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
