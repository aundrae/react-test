import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import ListItem from 'material-ui/ListItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <AppBar style={{ backgroundColor: '#ee0000' }}>
          <ToolBar>
            <IconButton color='inherit'>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              EmployTT
            </Typography>
          </ToolBar>
        </AppBar>
        <Drawer open={true} width={190}>
          <ListItem primaryText="Users" />
          <ListItem primaryText="Settings"/>
        </Drawer>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
