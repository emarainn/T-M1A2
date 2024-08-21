// Repository:  nugatory-react
// Author:      Jeff Grissom
// Version:     1.xx
import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2 },
      { id: 2, name: 'China', gold: 3 },
      { id: 3, name: 'Germany', gold: 0 },
    ]
  }

  render() { 
    return ( 
      <div className="App">
        { this.state.countries.map(country => 
          <Country 
            key={ country.id } 
            onDelete={ this.handleDelete }
            name={ country.name } 
            gold={ country.gold } 
          />) }
      </div>
     );
  }
}
 
export default App;