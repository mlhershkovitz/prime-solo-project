import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddAnimalForm extends Component {
  state = {
    addNewDog: {
      name: '',
      gender: '',
      breed: '',
      coat: '',
      house_trained: '',
      fixed: '',
      health_needs: '',
      comments: '',
    }
  }
  
  //dispatch post request
  handleChange = () => {

  }    
  render() { 
    //console.log(this.props.animalList);
    return (
      <>
    <div>
        <h1>Add an Animal</h1>
        <div>
            <h6></h6>
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
              {/* <li>{animal.age}</li>
              <li>{animal.size}</li>
              <li>{animal.breed}</li>
              <li>{animal.coat}</li>
              <li>{animal.house_trained}</li>
              <li>{animal.fixed}</li>
              <li>{animal.health_needs}</li>
              <li>{animal.comments}</li> */}
            </ul>
            </form>
            </div>
          ))}
      </div>
      </>
      );
    }
  }
  
  const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  };
  
  export default connect(mapReduxStateToProps)(AddAnimalForm);