import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import blue from '@material-ui/core/colors/blue';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};
class SimpleDialog extends React.Component {
  state={
    password: '',
    email: '',
  }
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Login To Account</DialogTitle>
         <FormControl>
           <InputLabel>Email</InputLabel>
            <Input
              type= 'text'
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
         </FormControl>
          <Divider />
          <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            type= 'password'
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" color="primary" onClick={this.handleClose}>
            Login
          </Button>
        </FormControl>
        <Divider />
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(SimpleDialog);
