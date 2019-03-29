import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router';


class AddAnimalForm extends Component {
  state = {
    newDog: {
      name: '',
      gender: '',
      breed: '',
      coat: '',
      house_trained: '',
      fixed: '',
      health_needs: '',
      comments: '',
      redirect: false,
    }
  }

  
  
  //dispatch post request
  handleChange = (key) => (event) => {
    console.log('event happened')
    this.setState({
        newDog: {
            ...this.state.newDog,
            [key]: event.target.value,
        }
    });
  }

  addNewDog = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_DOG', payload: this.state.newDog })
    this.setState({
      newDog: {
        name: '',
        gender: '',
        breed: '',
        coat: '',
        house_trained: '',
        fixed: '',
        health_needs: '',
        comments: '',
        }
    });
  }

  handleClick = () => {
    this.props.history.push('/add-attribute');
  }//end handle click function

  render() { 
    return (
      <>
    <div>
        <h1>Add an Animal</h1>
        <div>
          
            <form onSubmit={this.addNewDog}>
            <ul>
                <li>
                    Name:
                    <input placeholder="Name"
                    value={this.state.name}
                    onChange = {this.handleChange('name')}/>
                </li>
                <li>
                    Gender:
                    <input placeholder="gender"
                    value={this.state.gender}
                    onChange = {this.handleChange('gender')}/>
                </li>
                <li>
                    Breed (or best guess):
                    <input placeholder="Breed"
                    value={this.state.breed}
                    onChange = {this.handleChange('breed')}/>
                </li>
                <li>
                    Coat:
                    <input placeholder="Coat"
                    value={this.state.coat}
                    onChange = {this.handleChange('coat')}/>
                </li>
                <li>
                    House Trained:
                    <input placeholder="House trained"
                    value={this.state.house_trained}
                    onChange = {this.handleChange('house_trained')}/>
                </li>
                <li>
                    Fixed:
                    <input placeholder="Fixed"
                    value={this.state.fixed}
                    onChange = {this.handleChange('fixed')}/>
                </li>
                <li>
                    Health Needs:
                    <input placeholder="Health Needs"
                    value={this.state.health_needs}
                    onChange = {this.handleChange('health_needs')}/>
                </li>
                <li>
                    Comments:
                    <input placeholder="Comments"
                    value={this.state.comments}
                    onChange = {this.handleChange('comments')}/>
                </li>
                <Button type='submit'  value='Add New Dog'>Add Dog</Button>
            </ul>
            </form>
            <Button onClick={this.handleClick}>Next page</Button>
            </div>
      </div>
      </>
      );
    }
  }
  
  const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  };
  
  export default connect(mapReduxStateToProps)(AddAnimalForm);