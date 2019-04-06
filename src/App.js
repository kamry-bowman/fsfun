import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    editing: false,
    options: [],
    error: null,
  }

  async componentDidMount () {
    this.fetchOptions();
  }

  fetchOptions = async () => {
    try {
      const result = await fetch('https://beer.fluentcloud.com/v1/beer', {
        credentials: 'omit'
      });
      console.log(result);
      debugger;
      const jsonResult = await result.json();
      jsonResult = axios.get('api/beer');
      console.log(jsonResult);
      console.log(jsonResult);
     } catch (err) {
       console.dir(err);
       this.setState({ error: 'Failed to load drinks.'})
     }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="header">FluentStream Fun Summer Fun Time</h1>
        </header>
        <div className="interactiveScene">

        </div>
        
      </div>
    );
  }
}

export default App;
