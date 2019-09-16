import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends Component {
  onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term
      }
    });
  }
  render() {
    return (
      <div className="App ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
