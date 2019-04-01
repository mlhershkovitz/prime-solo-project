import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';


//if need help figuring out the specific of this,
//look at any of the main components of the feedback app

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 20
  }
});

//need to figure out the material ui cards!
class AnimalsPage extends Component {

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
      <div className="">
      <h1>All Animals</h1>
    <div className="item-div">
        
        
        {this.props.animalList.map((animal) => (
          <Card className={classes.card} key={animal.id}>
          <div className="item-info">
          <h6>{animal.name}</h6>
          <img  src={animal.img_url} alt="dog-image" />
          <ul>
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
          </Card>
        ))}
    </div>
    </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(withStyles(styles)(AnimalsPage));