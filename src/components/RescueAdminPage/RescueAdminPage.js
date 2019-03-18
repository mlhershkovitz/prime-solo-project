import React, { Component } from 'react';
import { connect } from 'react-redux';

//if need help figuring out the specific of this,
//look at any of the main components of the feedback app

//need to figure out the material ui cards!
class RescueAdminPage extends Component {

    //add animal form
    //this needs to include either the same check boxes as the search page
    //or radio buttons along with and input space for the written bio
    //MUST INCLUDE a place to upload photos

  //display the animals in a table with a delete button
  //put in a button to switch an animal to a "success story" table

render() {  
    return (
    <div>
        <h1>Rescue Admin</h1>
    </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(RescueAdminPage);