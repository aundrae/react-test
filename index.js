import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import EmployTT from './components/MainScreen'
class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <EmployTT />
    )
  }
}

render(<App />, document.getElementById('root'));
