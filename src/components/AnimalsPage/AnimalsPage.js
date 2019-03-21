import React, { Component } from 'react';
import { connect } from 'react-redux';

//if need help figuring out the specific of this,
//look at any of the main components of the feedback app

//need to figure out the material ui cards!
class AnimalsPage extends Component {

  //component did mount to make sure the page loads correctly
  componentDidMount() {
    this.getAnimals();
}
  //will for sure need get request in here
  getPlants() {
    this.props.dispatch({ type: 'GET_ANIMAL' })
}
  //display the animals on cards

  
render() {  
    return (
    <div>
        <h1>All Animals</h1>
    </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(AnimalsPage);