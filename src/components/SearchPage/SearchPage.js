import React, { Component } from 'react';
import { connect } from 'react-redux';

//check box code example at bottom of page!

//if need help figuring out the specific of this,
//look at any of the main components of the feedback app

class SearchPage extends Component {

    state = {
        female: true,
        male: true,
        xsmall: true,
        small: true,
        medium: true,
        large: true,
        xlarge: true,
        shedding: true,
        notshedding: true,
        activity_low: true,
        activity_medium: true,
        activity_high: true,
        activity_xhigh: true, 
        train_basic: true,
        train_easy: true,
        train_hard: true,
        dogs: true,
        cats: true,
        kids: true,
        other_animals: true,
        single_animal: true,
        dog_park: true,
        crowds: true,
        apartment: true,
        fence: true,
        leash: true,
        
    }
componentDidMount (){
    
}; //end component did mount

//this will need to redirect to search results page with animal cards
  handleClick = () => {
    console.log('button clicked');
    this.props.dispatch({ type: 'GET_ANIMAL', payload: });
    // this.props.dispatch()
  }

  handleChangeFor = () =>{

  }
  //need to figure out how to insert check boxes
  //make a list of what check boxes to make
  //figure out how to connect the check boxes to the db to filter through the animals

render() {  
    console.log("loogogog", this.props.animalls);
    
    return (
        <>
    <div className="filters">
        <h1>Search For Your New Best Friend</h1>
        <h3>Use these to help figure out which of these wonderful creatures you are the best home for!</h3>
        <br />
        <div className="gender">
            <p>Gender</p>
            Female: <input onChange={this.handleChangeFor('female')} type="checkbox" className="gender-female"></input>
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
        <div className="activity">
            <p>Activity Level</p>
            Couch Potato: <input type="checkbox" className="activity-xlow"></input>
            Low activity: <input type="checkbox" className="activity-low"></input>
            Medium activity: <input type="checkbox" className="activity-medium"></input>
            High activity: <input type="checkbox" className="activity-high"></input>
            Athlete: <input type="checkbox" className="activity-xhigh"></input>
        </div>
        <div className="training">
            <p>Trainability</p>
            Already trained in the basics: <input type="checkbox" className="training-basic"></input>
            Easily (or very food motivated): <input type="checkbox" className="training-easy"></input>
            Stubborn: <input type="checkbox" className="training-stubborn"></input>
        </div>
        {/* <div className="snuggle">
            Next Level Snuggler: <input type="checkbox" className="snuggle-aloof"></input>
        </div> */}
        <div className="interaction">
            <p>Other Creatures</p>
            Other dogs: <input type="checkbox" className="creatures-dogs"></input>
            Cats: <input type="checkbox" className="creatures-cats"></input>
            Kids: <input type="checkbox" className="creatures-kids"></input>
            Other: <input type="checkbox" className="creatures-other"></input>
            Single Pet Household: <input type="checkbox" className="creatures-none"></input>
        </div>
        <div className="socialization">
            <p>What would you like to do with me?</p>
            Dog Park: <input type="checkbox" className="social-dogpark"></input>
            Be around multiple strangers at once: <input type="checkbox" className="social-people"></input>
            Apartment Living: <input type="checkbox" className="social-apartment"></input>
            Physical fence in yard: <input type="checkbox" className="social-physical-fence"></input>
            Calm on a leash: <input type="checkbox" className="social-leash-walking"></input>
        </div>
        
        <button onClick={this.handleClick}>Search</button>

        {this.props.animalls.map((animal)=>
            <ul><li>{animal.name}</li></ul>
        )}
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
