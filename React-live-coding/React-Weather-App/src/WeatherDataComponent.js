import React, { Component } from "react";

export default class WeatherDataComponent extends Component {


    shouldComponentUpdate(nextProps,nextState){
        //controlling render method
          if(nextProps.temp===this.props.temp && nextProps.city===this.props.city){
              return false
          } 
          return true
    }

  render() {
      console.log("render from WeatherComponent")
    return (
      <div>
        <p>Feels like {this.props.feelsLike}</p>
        <p>{this.props.city}</p>
        <img
          src={`http://openweathermap.org/img/wn/${this.props.icon}@4x.png`}
          alt=""
        />
        <div>
          <div>
            <h1>{this.props.temp}</h1>
          </div>
          <div>
            <p>{this.props.humidity}</p>
            <p>{this.props.pressure}</p>
            <p>{this.props.maxTemp}</p>
            <p>{this.props.minTemp}</p>
          </div>
        </div>
      </div>
    );
  }
}
