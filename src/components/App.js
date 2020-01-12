import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
            headers: {
                Authorization: 'Client-ID 62ac8e81f1862820014900f9c19934bcdc46c833926f32d82067950f9dc2e711'
            }
        });

        this.setState({ images: response.data.results });
    }

    render () {
        return(
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }; 
};

export default App;