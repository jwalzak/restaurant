import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div className='nav'>
        <ul>
          <li><a className='link' href="/">Home</a></li>
          <li><a className='link' href="/about">About us</a></li>
          <li><a className='link' href="/additem">Add Item</a></li>
        </ul>
      </div>
    )
  }
}
