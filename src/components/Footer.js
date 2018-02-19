import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import config from './config.js'

class Footer extends Component {
  static defaultProps = {
    center: {lat: 42.66571, lng: -81.2134618},
    zoom: 17,
    size: {width: 640, height: 380},
  }
  
  render() {
    return (
      <div className="footer">
        <p>Find us next to the bridge in Port Stanley</p>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    )
  }
}

export default Footer
