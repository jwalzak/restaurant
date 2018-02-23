import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>
          Located in the heart of Port Stanley Ontario, That Breakfast Place has
          been serving our enthusiastic lclients for the last 20 years. Open
          daily until 14:00.
        </p>
        <img src={require('../images/breakfast1.jpg')} alt="" className='tbp-outside'/>
        <p>
          Come on in and enjoy the view of the Port Stanley Harbour and Lake
          Erie.
        </p>
      </div>
    )
  }
}
