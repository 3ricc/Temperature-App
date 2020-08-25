import React, { Component } from 'react';

const API_ADDRESS1 = 'https://api.openweathermap.org/data/2.5/weather?appid=fa7959c2fce14f00abc5fb86df87cf5a&lat='

class Geolocation extends Component {

    state = { lat: '', lng: '', canLocate: false, city: '', temp: ''}

    findCity = () => {
        fetch(`${API_ADDRESS1}${this.state.lat}&lon=${this.state.lng}`)
        .then (response => response.json())
        .then(json =>{

            this.setState({lat: this.state.lat, lng: this.state.lng, canLocate: true, city: json.name, temp: (parseFloat(json.main.temp) - 273.15).toFixed(2)})

        })
    }

    componentDidMount(){
        this.getLocation();
    }

    setLocation = (position) => {
        this.setState({lat: position.coords.latitude, lng: position.coords.longitude, canLocate: true, city: '', temperature: ''});
        console.log(this.state);
        this.findCity();
    }

    errorHandler = (error) => {
    }


    getLocation = () =>{
        if(navigator.geolocation){
            var options = {timeout:60000};
            navigator.geolocation.getCurrentPosition(this.setLocation, this.errorHandler, options);
        }
        else{
            this.setState({lat: '', lng: '', canLocate: false, city: '', temperature: ''});
        }
    }

    render(){
        if (!this.state.canLocate){
            return (
                <div>
                    <hr></hr>
                    <p>Location Sharing is Off.</p>
                </div>
            )
        }
        else {
            return(
                <div>
                    <hr></hr>
                    <p>Current Location: {this.state.city}</p>
                    <p>Temperature: {this.state.temp} degrees Celcius.</p>
                </div>
            )
        }
    }

}

export default Geolocation;