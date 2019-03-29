import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddAnimalForm extends Component {
  
    //dispatch post request
  
    
  render() { 
    //console.log(this.props.animalList);
    return (
    <div>
        <h1>Add an Animal</h1>
        <div>
            <h6>{animal.name}</h6>
            <ul>
                <li>
                    Name:
                    <input placeholder="Name"
                    value={this.state.name}
                    onChange = {this.handleChange('name')}/>
                </li>
                <li>
                    Gender:
                    <label>
                        <input
                        type="radio"
                        value="female"
                        checked={this.state.gender.female === "female"}
                        onChange={this.handleChange('female')}/>
                        Female
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="male"
                        checked={this.state.gender.male === "male"}
                        onChange={this.handleChange('male')}/>
                        Male
                    </label>
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

              <li>{animal.age}</li>
              <li>{animal.size}</li>
              <li>{animal.breed}</li>
              <li>{animal.coat}</li>
              <li>{animal.house_trained}</li>
              <li>{animal.fixed}</li>
              <li>{animal.health_needs}</li>
              <li>{animal.comments}</li>
            </ul>
            </div>
          ))}
      </div>
      );
    }
  }
  
  const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  };
  
  export default connect(mapReduxStateToProps)(AddAnimalForm);