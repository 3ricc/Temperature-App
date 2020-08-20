import React, { Component } from 'react';
import Search from './Search';
import City from './City';
import Temperature from './Temperature';

const API_ADDRESS1 = 'https://api.openweathermap.org/data/2.5/weather?q=' // half of the api key
const API_ADDRESS2 = '&appid=fa7959c2fce14f00abc5fb86df87cf5a' // second half of the api key
const TEST_ADDRESS = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=fa7959c2fce14f00abc5fb86df87cf5a' // debugging purposes


class App extends Component{

    state = { city: null, temperature: null };

    //function fetches the city data from the OpenWeather api and sets the state to it
    searchCity = cityQuery => {
        fetch(`${API_ADDRESS1}${cityQuery}${API_ADDRESS2}`)
        .then(response => response.json())
        .then(json => {
            const city = json.name;
            const temperature = parseInt(json.main.temp) - 273;

            this.setState({ city, temperature })
        })
        .catch(err => alert("No city found"))
    }

    render(){

        console.log('this.state' , this.state);

        return(
            <div>
              <h2>Temperature Finder</h2>
              <Search searchCity={this.searchCity}/>
              <City city={this.state.city} />
              <Temperature temperature={this.state.temperature} />
            </div>
        );
    }
}

export default App;