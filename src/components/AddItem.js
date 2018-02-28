import React, { Component } from 'react'
import Rebase from 're-base'
import firebase from 'firebase'

// My files
import config from './config'

class AddItem extends Component {
  handleInput(e) {
    e.preventDefault()
    this.setState({
      menu: this.state.menu.concat([ this.price, this.name ])
    })
  }

  render() {
    return (
      <div className="additems">
        <form onSubmit={e => this.handleInput(e)}>
          <fieldset className="legend">
            <legend>Enter a new food item</legend>
            <label className="label" htmlFor="nameInput">
              Name: <input className="inputText" type="text" ref={input => (this.name = input)} />
            </label>
            <label className="label" htmlFor="priceInput">
              Price: <input className="inputText" type="text" ref={input => (this.price = input)} />
            </label>
            <button>Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default AddItem
