import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import '../css/App.css'

// Components
import Header from './Header'
import About from './About'
import Menu from './Menu'
import Footer from './Footer'

// Extras
import menu from '../menu-items'

class App extends Component {
  loadMenu() {
    this.setState({
      menuItems: menu,
    })
  }

  render() {
    return (
      <div>
        <Header name="That Breakfast Place" />
        <About />
        <Menu />
        <Footer />
      </div>
    )
  }
}

export default App
