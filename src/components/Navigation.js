import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div className='nav'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/menu">Menu</a></li>
        </ul>
      </div>
    )
  }
}
