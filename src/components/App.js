import React, { Component } from 'react';
import Search from './Search';
import CityInfo from './CityInfo';
import Geolocation from './Geolocation';
import Login from './Login';


class App extends Component{

    state = { city: null, temperature: null, type: null, weather: null, icon: null};

    getData = (data) => {
        this.setState(data);
    }

    render(){

        return(
            <div>
              <h2>Temperature Finder</h2>
              <Search sendData={this.getData} />
              <CityInfo state={this.state} />
              <Geolocation />
              <Login />
            </div>
        );

        
    }
}

export default App;