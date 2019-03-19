import React, { Component } from 'react';
import { connect } from 'react-redux';

//check box code example at bottom of page!

//if need help figuring out the specific of this,
//look at any of the main components of the feedback app

class SearchPage extends Component {

//this will need to redirect to search results page with animal cards
  handleClick = () => {
    console.log('button clicked');
  }

  //need to figure out how to insert check boxes
  //make a list of what check boxes to make
  //figure out how to connect the check boxes to the db to filter through the animals

render() {  
    return (
    <div>
        <button onClick={this.handleClick}>Search</button>
    </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(SearchPage);


//code for the check boxes
//myFunction = () => {
//    var x = document.getElementById("myCheck");
//    x.checked = true;
//  }

//this goes in the return
//        <input type="checkbox" id="myCheck"></input>
