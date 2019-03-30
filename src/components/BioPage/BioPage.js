import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';


// const styles = theme => ({
//   card: {
//     maxWidth: 400,
//     margin: 20
//   }
// });

//need to figure out the material ui cards!
class BioPage extends Component {

  //component did mount to make sure the page loads correctly
  componentDidMount() {
     this.getAnimals();    
  };// end component did mount

  //will for sure need get request in here
  getAnimals() {
    this.props.dispatch({ type: 'FETCH_ANIMAL' });
  };//end get dispatch to saga
  
  //display the animals on cards

  
render() { 
  console.log(this.props.animalList);
  const { classes } = this.props;
   
    return (
      <div>
      <h1>Hello there, my name is {this.props.animalList.name}!</h1>

      {this.props.animalList.map((dog) => (
        <div>
          <h5>{animal.name}</h5>
          <ul>
            <h6>Quick Facts</h6>
            <li>{animal.gender}</li>
            <li>{animal.age}</li>
            <li>{animal.size}</li>
            <li>{animal.breed}</li>
            <li>{animal.coat}</li>
            <li>{animal.house_trained}</li>
            <li>{animal.fixed}</li>
            <li>{animal.health_needs}</li>
            <li>{animal.comments}</li>
            {/* <li>{animal.img_url}</li>
            <li>{animal.dog_bio}</li> */}
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

export default connect(mapReduxStateToProps)(withStyles(styles)(BioPage));