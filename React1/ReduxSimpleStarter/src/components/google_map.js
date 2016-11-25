import _ from 'lodash';
import React from 'react';
import { GoogleMap, GoogleMapLoader } from 'react-google-maps';


export default (props) => {

  return (
    <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: `100%`,
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            //ref={(map) => (this._googleMapComponent = map) && console.log(map.getZoom())}
            defaultZoom={props.zoom}
            defaultCenter={{ lat: props.lat, lng:  props.lon }}
            //onClick={::this.handleMapClick}
          >
          </GoogleMap>
        }
      />
  );
}
