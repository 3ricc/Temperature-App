import React, { Component } from 'react';

class Search extends Component {

    state = { cityQuery: '', type: 'f'}

    updateCityQuery = event => {
        this.setState({ cityQuery: event.target.value, type: this.state.type });
    }

    updateTypeQuery = () => {
        this.setState( { cityQuery: this.state.cityQuery, type: document.getElementById("type").value});
    }

    handleKeyPress = event => {
        if(event.key == 'Enter'){
            this.updateTypeQuery();
            this.searchCity();  
        }
    }

    searchCity = () => {
        this.props.searchCity(this.state);
        console.log(this.state);
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
                    <option value="f">Fahrenheit</option>
                    <option value="c">Celsius</option>
                </select>

                <br></br>
                <button onClick={ this.searchCity }>Search</button>
                
            </div>
        )
        
    }
}

export default Search;