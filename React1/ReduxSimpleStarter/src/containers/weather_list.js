import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getForcast5 } from '../actions/index';

import Sparkline from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  constructor(props){
    super(props);

    this.state = { forcast: []};
  }

  //every clas must have a render function
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{width: '25%'}}>Map</th>
            <th style={{width: '25%'}}>Temperature (C)</th>
            <th style={{width: '25%'}}>Pressure (hPa)</th>
            <th style={{width: '25%'}}>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.forcast.map(this.renderForcast)}
        </tbody>
      </table>
    );
  }

  renderForcast(forcast){
    const city = forcast.city;
    const temps = forcast.list.map(weather => weather.main.temp - 273.15); //converting to celcius
    const pressures = forcast.list.map(weather => weather.main.pressure);
    const humidities = forcast.list.map(weather => weather.main.humidity);
    const { lon, lat } = city.coord; //ES6.  MUST BE THE SAME NAME AS COORD KEYS

    return (
      <tr key={city.id}>
        <td>{city.name}
          <GoogleMap
            lat={lat}
            lon={lon}
            zoom={12}
           />
        </td>
        <td>
          <Sparkline
            height={100}
            width={150}
            data={temps}
            color="red"
            units="C" />
        </td>
        <td>
          <Sparkline
            height={100}
            width={150}
            data={pressures}
            color="blue"
            units="hPa" />
        </td>
        <td>
          <Sparkline
            height={100}
            width={150}
            data={humidities}
            color="black"
            units="%" />
        </td>
      </tr>
    );
  }

}

function mapStateToProps({forcast}){
  return {
    forcast: forcast
  };
}

// function mapDispatchToProps(dispatch){
//   //whenever getForcast5 is called, result passed to all middleware and reducers
//   return bindActionCreators({getForcast5}, dispatch);
// }

export default connect(mapStateToProps)(WeatherList);
