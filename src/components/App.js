import React, { Component } from 'react';
import Search from './Search';
import City from './City';
import Temperature from './Temperature';

const WEATHER_API1 = 'https://api.openweathermap.org/data/2.5/weather?q=' // half of the api key
const WEATHER_API2 = '&appid=fa7959c2fce14f00abc5fb86df87cf5a' // second half of the api key
const TEST_ADDRESS = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=fa7959c2fce14f00abc5fb86df87cf5a' // debugging purposes


class App extends Component{

    state = { city: null, temperature: null, type: null};

    //function fetches the city data from the OpenWeather api and sets the state to it
    invokeWeatherAPI = data => {
        fetch(`${WEATHER_API1}${data.cityQuery}${WEATHER_API2}`)
        .then(response => response.json())
        .then(json => {
            const city = json.name;
            var temperature = parseFloat(json.main.temp);
            var type = data.type;

            if(type == 'f'){
                temperature = temperature * 9/5 - 459.67;
                type = 'Fahrenheit';
            }
            else{
                temperature -= 273.15;
                type = 'Celcius';
            }

            temperature = temperature.toFixed(2);

            this.setState({ city, temperature, type })
        })
        //.catch(err => alert("No city found"))
    }

    render(){

        console.log('this.state' , this.state.type);

        return(
            <div>
              <h2>Temperature Finder</h2>
              <Search searchCity={this.invokeWeatherAPI}/>
              <City city={this.state.city} />
              <Temperature state={this.state} />
            </div>
        );
    }
}

export default App;