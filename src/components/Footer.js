import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

// Imports I made
import Marker from './Marker'
import config from './config.js'

class Footer extends Component {
  static defaultProps = {
    center: { lat: 42.66571, lng: -81.2134618 },
    zoom: 18,
    size: { width: 300, height: 100 },
  }

  render() {
    return (
      <div className="footer">
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          draggable={false}
          title={'Find us near the lift bridge in Port Stanley Ontario'}
        >
          <Marker
            lat={42.66581}
            lng={-81.2135618}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Footer
