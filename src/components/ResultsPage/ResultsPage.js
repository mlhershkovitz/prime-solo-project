import React, { Component } from 'react';
import { connect } from 'react-redux';

//if need help figuring out the specific of this,
//look at any of the main components of the feedback app

//need to figure out the material ui cards!
class ResultsPage extends Component {

  //display all animals that fit the critera
  //display the animals on cards

render() {  
    return (
    <div>
        <h1>Results</h1>
    </div>
    );
  }
}
//add a button that says "new search" to go bck to search page?

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(ResultsPage);