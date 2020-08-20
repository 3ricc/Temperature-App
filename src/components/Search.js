import React, { Component } from 'react';

class Search extends Component {

    state = { cityQuery: ''}

    updateCityQuery = event => {
        this.setState({ cityQuery: event.target.value });
    }

    handleKeyPress = event => {
        if(event.key == 'Enter'){
            this.searchCity();
        }
    }

    searchCity = () => {
        this.props.searchCity(this.state.cityQuery);
    }

    render() {

        return(
            <div>
                <input 
                    onChange={this.updateCityQuery}
                    onKeyPress={this.handleKeyPress}
                    placeholder='Search for a city'
                />
                <button onClick={ this.searchCity }>Search</button>
            </div>
        )
        
    }
}

export default Search;