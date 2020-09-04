import React, { Component } from 'react';

    const WEATHER_API1 = 'https://api.openweathermap.org/data/2.5/weather?appid=fa7959c2fce14f00abc5fb86df87cf5a&q='
    const TEST_ADDRESS = 'http://api.openweathermap.org/data/2.5/weather?appid=fa7959c2fce14f00abc5fb86df87cf5a&q=London' // debugging purposes
    const WEATHER_ICON_ADDRESS = 'http://openweathermap.org/img/wn/'

class Search extends Component {

    state = { cityQuery: '', type: 'Fahrenheit'}

    invokeWeatherAPI = (data) => {
        fetch(`${WEATHER_API1}${this.state.cityQuery}`)
        .then(response => response.json())
        .then(json => {
            const city = json.name;
            var temperature = parseFloat(json.main.temp);
            const type = data.type;
            const weather = json.weather[0].main;
            const icon = WEATHER_ICON_ADDRESS + json.weather[0].icon + '@2x.png';

            if(type == 'Fahrenheit'){
                temperature = temperature * 9/5 - 459.67;
            }
            else{
                temperature -= 273.15;
            }
            temperature = temperature.toFixed(2);

            this.props.sendData({ city, temperature, type, weather, icon });
        })
        .catch(err => alert("No city found"))
    }

    searchCity = () => {
        this.invokeWeatherAPI(this.state);
    }

    updateCityQuery = (event) => {
        this.setState({ cityQuery: event.target.value, type: this.state.type });
    }

    updateTypeQuery = () => {
        this.setState( { cityQuery: this.state.cityQuery, type: document.getElementById("type").value});
    }

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            this.invokeWeatherAPI(this.state);
        }
    }

    render() {

        return(
            <div>

                <input 
                    onChange={this.updateCityQuery}
                    onKeyPress={this.handleKeyPress}
                    placeholder='Search for a city'
                />
                <select name="temptype" id="type" onChange={this.updateTypeQuery}>
                    <option value="Fahrenheit">Fahrenheit</option>
                    <option value="Celcius">Celsius</option>
                </select>

                <br></br>
                <button onClick={ this.searchCity }>Search</button>
                
            </div>
        )
        
    }
}

export default Search;