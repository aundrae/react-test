import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import PermanentDrawerLeft from './components/AppBar'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'React',
    };
  }
  
  render() {
    return (
      <PermanentDrawerLeft />
    )
  }
}

render(<App />, document.getElementById('root'));
