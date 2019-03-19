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
        <>
    <div className="filters">
        <h1>Search For Your New Best Friend</h1>
        <h3>Use these to help figure out which of these wonderful creatures you are the best home for!</h3>
        <br />
        <div className="gender">
        <p>Gender</p>
        Female: <input type="checkbox" className="gender-female"></input>
        Male: <input type="checkbox" className="gender-male"></input>
        </div>
        <div className="size">
        <p>Size</p>
        Pocket Pet (-8 lbs): <input type="checkbox" className="size-xsmall"></input>
        Small (8-29 lbs): <input type="checkbox" className="size-small"></input>
        Medium (30-55 lbs): <input type="checkbox" className="size-medium"></input>
        Large (56-89 lbs): <input type="checkbox" className="size-large"></input>
        X-Large Lap Dogs (90+ lbs): <input type="checkbox" className="size-xlarge"></input>
        </div>
        <div className="shedding">
        <p>Shedding</p>
        Yes: <input type="checkbox" className="shedding-yes"></input>
        No: <input type="checkbox" className="shedding-no"></input>
        </div>

        <button onClick={this.handleClick}>Search</button>
    </div>
        </>
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
