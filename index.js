import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import PermanentDrawerLeft from './components/AppBar'
class App extends Component {
  constructor() {
    this.state = {
      name: 'React',
    };
  }
  
  render() {
    return (
      <h1>style</h1>
    )
  }
}

render(<App />, document.getElementById('root'));
