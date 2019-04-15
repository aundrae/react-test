import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import EmployTT from './components/AppBar'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'React',
    };
  }
  
  render() {
    return (
      <EmployTT />
    )
  }
}

render(<App />, document.getElementById('root'));
