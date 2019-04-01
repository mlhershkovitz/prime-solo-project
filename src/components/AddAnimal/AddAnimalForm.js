import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';


class AddAnimalForm extends Component {
  state = {
      name: '',
      gender: '',
      age: '',
      size: '',
      breed: '',
      coat: '',
      house_trained: '',
      fixed: '',
      health_needs: '',
      comments: '',
      img_url: '',
      dog_bio: '',
      redirect: false,
    }

  
  
  //dispatch post request
  handleChange = (key) => (event) => {
    console.log('event happened')
    this.setState({
            ...this.state,
            [key]: event.target.value,
    });
  }

  addNewDog = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_DOG', payload: this.state })
    console.log(this.state);
    
    this.setState({
        name: '',
        gender: '',
        age: '',
        size: '',
        breed: '',
        coat: '',
        house_trained: '',
        fixed: '',
        health_needs: '',
        comments: '',
        img_url: '',
        dog_bio: '',
    })
  }

  fillIn = () => {
        this.setState({
            name: 'Poindexter',
            gender: 'Male',
            age: '6.5',
            size: '10 lbs',
            breed: 'Japanese Chin',
            coat: 'Long black and white hair',
            house_trained: 'House-trained',
            fixed: 'Neutered',
            health_needs: 'Has all shots',
            comments: 'All he wants is to be held, pet, and sit in a lap forever. Perfect little cuddle dog.',
            img_url: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/43989388/3/?bust=1553323006&width=720',
            dog_bio: '',
    })
  }


  render() {
     
    return (
      <>
    <div>
        <h1>Add an Animal</h1>
        <div>
          
            <form onSubmit={this.addNewDog}>
            <ul>
                <li>
                    Name: <input placeholder="Name"
                    value={this.state.name}
                    onChange = {this.handleChange('name')}/>
                </li>
                <li>
                    Gender: <input placeholder="gender"
                    value={this.state.gender}
                    onChange = {this.handleChange('gender')}/>
                </li>
                <li>
                    About how old: <input placeholder="age"
                    value={this.state.age}
                    onChange = {this.handleChange('age')}/>
                </li>
                <li>
                    How many pounds: <input placeholder="size"
                    value={this.state.size}
                    onChange = {this.handleChange('size')}/>
                </li>
                <li>
                    Breed (or best guess): <input placeholder="Breed"
                    value={this.state.breed}
                    onChange = {this.handleChange('breed')}/>
                </li>
                <li>
                    Coat: <input placeholder="Coat"
                    value={this.state.coat}
                    onChange = {this.handleChange('coat')}/>
                </li>
                <li>
                    House Trained: <input placeholder="House trained"
                    value={this.state.house_trained}
                    onChange = {this.handleChange('house_trained')}/>
                </li>
                <li>
                    Fixed: <input placeholder="Fixed"
                    value={this.state.fixed}
                    onChange = {this.handleChange('fixed')}/>
                </li>
                <li>
                    Health Needs: <input placeholder="Health Needs"
                    value={this.state.health_needs}
                    onChange = {this.handleChange('health_needs')}/>
                </li>
                <li>
                    Short description: <input placeholder="Comments"
                    value={this.state.comments}
                    onChange = {this.handleChange('comments')}/>
                </li>
                <li>
                    Upload adorable image: <input placeholder="Image URL"
                    value = {this.state.img_url}
                    type = 'link'
                    onChange = {this.handleChange('img_url')}/>
                </li>
                <li>
                    Biography: <input placeholder="Biography"
                    value={this.state.dog_bio}
                    onChange = {this.handleChange('dog_bio')}/>
                </li>

                <Button type='submit'  value='Add New Dog'>Add Dog</Button>
            </ul>
            </form>
            </div>
      </div>
      <button onClick={this.fillIn}></button>
      </>
      );
    }
  }
  
  const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  };
  
  export default connect(mapReduxStateToProps)(AddAnimalForm);