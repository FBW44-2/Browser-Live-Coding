import React, { Component } from "react";
import WeatherDataComponent from "./WeatherDataComponent";


export default class App extends Component {
  state = {
    cityName: "",
    weatherData: null,
  };

  getUserCity = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  formSubmission = (e) => {
    //prevent default behaviour of form
    e.preventDefault();
    console.log("form Submitted");
    console.log(this.state.cityName);
    if(this.state.cityName.trim() !== ""){
        this.fetchWeatherData(this.state.cityName);
    }
  
  };

  fetchWeatherData = (city) => {
    //fetching weather information from openweathermap api
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ weatherData: data }))
      .catch(err=>console.log(err))
  };


  componentDidMount(){
    //onload
    this.fetchWeatherData("berlin")
  }


  render() {
    console.log(process.env.REACT_APP_API_KEY)
   let data=this.state.weatherData

    return (
      <div>
        <h1>Weather App</h1>
        <form onSubmit={this.formSubmission}>
          <input
            type="text"
            placeholder="Enter Your City Name"
            onChange={this.getUserCity}
          />
          <button>Get Weather Data</button>
        </form>


      { data &&  <WeatherDataComponent 
          city={this.state.cityName} 
          temp={data.main.temp}
          maxTemp={data.main.temp_max}
          minTemp={data.main.temp_min}
          humidity={data.main.humidity}
          feelsLike={data.main.feels_like}
          icon={data.weather[0].icon}
        /> }
       
      </div>
    );
  }
}
