import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
      <BrowserRouter>
        <div className="container">
          <Header name="That Breakfast Place" />
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/about" component={About} />
            <Route exact path="/menu" component={Menu} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
