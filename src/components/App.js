import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends Component {
    async onSearchSubmit(condition) {
      // console.log(condition);
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: { query: condition }, 
        headers: {
          Authorization: 'Client-ID '
        }
      });
      console.log(response.data.results);
    }
  
    

    render() {
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
    );
  }
}

export default App;
