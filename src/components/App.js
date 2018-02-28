import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../css/App.css'

// Components
import Header from './Header'
import About from './About'
import Menu from './Menu'
import Footer from './Footer'
import AddItem from './AddItem'
import NoMatch from './NoMatch'

// Extras
import menu from '../menu-items'

class App extends Component {
  constructor() {
    super()

    this.state = {
      menuItems: [],
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header name="That Breakfast Place" />
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/about" component={About} />
            <Route exact path="/additem" component={AddItem} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
