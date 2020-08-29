import React, { Component } from 'react';
import Search from './Search';
import City from './City';
import Temperature from './Temperature';
import Geolocation from './Geolocation';
import Login from './Login';


class App extends Component{

    state = { city: null, temperature: null, type: null};

    getData = (data) => {
        this.setState(data);
    }

    render(){

        return(
            <div>
              <h2>Temperature Finder</h2>
              <Search sendData={this.getData} />
              <City city={this.state.city} />
              <Temperature state={this.state} />
              <Geolocation />
              <Login />
            </div>
        );

        
    }
}

export default App;