import React, { Component } from 'react';
import Search from './Search';
import City from './City';
import Temperature from './Temperature';
import Geolocation from './Geolocation';


class App extends Component{

    state = { city: null, temperature: null, type: null};

    getData = (data) => {
        this.setState(data);
        console.log(this.state);
    }

    render(){

        console.log('this.state' , this.state.type);

        return(
            <div>
              <h2>Temperature Finder</h2>
              <Search sendData={this.getData} />
              <City city={this.state.city} />
              <Temperature state={this.state} />
              <Geolocation />
            </div>
        );
    }
}

export default App;