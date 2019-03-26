import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    // this.getAnimals();
    this.props.dispatch({ type: 'FETCH_ANIMAL' });
    
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
      <h1>All Animals</h1>
    <div style={{
      display: 'flex',

    }}>
        
        
        {this.props.animalList.map((animal) => (
          <Card className={classes.card}>
          <div>
          <h6>{animal.name}</h6>
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