import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {

  handleClickTable = (event) => {
    event.preventDefault();
    console.log('table button clicked');
    this.props.history.push('/rescue-admin');
  } //end click to table button

  handleClickAnimals = (event) => {
    event.preventDefault();
    console.log('all animals button clicked');
    this.props.history.push('/animals');
  } //end click add button

  handleClickAdd = (event) => {
    event.preventDefault();
    console.log('button clicked');
    this.props.history.push('/add-animal');
  } //end click add button
  render() {
    return(
    <div>
      <h1 id="welcome">
      Welcome, Rescue Admin: { this.props.user.username }!
      </h1>
      <h3>What would you like to do today?</h3>
      <Button onClick={this.handleClickAnimals}>View All Animals</Button>
      <br />
      <Button onClick={this.handleClickTable}>Edit Animals</Button>
      <br />
      <Button onClick={this.handleClickAdd}>Add New Animal</Button>
    </div>
    )
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
