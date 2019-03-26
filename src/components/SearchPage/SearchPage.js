import React, { Component } from 'react';
import { connect } from 'react-redux';

//check box code example at bottom of page!

//if need help figuring out the specific of this,
//look at any of the main components of the feedback app

class SearchPage extends Component {

    state = {
        female: false,
        male: false,
        xsmall: false,
        small: false,
        medium: false,
        large: false,
        xlarge: false,
        shedding: false,
        notshedding: false,
        activity_xlow: false,
        activity_low: false,
        activity_medium: false,
        activity_high: false,
        activity_xhigh: false, 
        train_basic: false,
        train_easy: false,
        train_hard: false,
        dogs: false,
        cats: false,
        kids: false,
        other_animals: false,
        single_animal: false,
        dog_park: false,
        crowds: false,
        apartment: false,
        fence: false,
        leash: false,
        
    }

//this will need to redirect to search results page with animal cards
  handleClick = () => {
    console.log('button clicked');
    this.props.dispatch({ type: 'GET_ANIMAL', payload: this.state});
    // this.props.dispatch()
  }

  handleChangeFor = selector => () =>{
    if(selector === 'female'){
        this.setState({
            ...this.state,
            female: true,
        })
    }
    if(selector === 'male'){
        this.setState({
            ...this.state,
            male: true,
        })
    }
        if(selector === 'xsmall'){
            this.setState({
                ...this.state,
                xsmall: true,
            })
        }
        if(selector === 'small'){
            this.setState({
                ...this.state,
                small: true,
            })
        }
        if(selector === 'medium'){
            this.setState({
                ...this.state,
                medium: true,
            })
        }
        if(selector === 'large'){
            this.setState({
                ...this.state,
                large: true,
            })
        }
        if(selector === 'xlarge'){
            this.setState({
                ...this.state,
                xlarge: true,
            })
        }
        if(selector === 'shedding'){
            this.setState({
                ...this.state,
                shedding: true,
            })
        }
        if(selector === 'notshedding'){
            this.setState({
                ...this.state,
                notshedding: true,
            })
        }
        if(selector === 'activity_xlow'){
            this.setState({
                ...this.state,
                activity_low: true,
            })
        }
        if(selector === 'activity_low'){
            this.setState({
                ...this.state,
                activity_low: true,
            })
        }
        if(selector === 'activity_medium'){
            this.setState({
                ...this.state,
                activity_medium: true,
            })
        }
        if(selector === 'activity_high'){
            this.setState({
                ...this.state,
                activity_high: true,
            })
        }
        if(selector === 'activity_xhigh'){
            this.setState({
                ...this.state,
                activity_xhigh: true,
            })
        }
        if(selector === 'train_basic'){
            this.setState({
                ...this.state,
                train_basic: true,
            })
        }
        if(selector === 'train_easy'){
            this.setState({
                ...this.state,
                train_easy: true,
            })
        }
        if(selector === 'train_hard'){
            this.setState({
                ...this.state,
                train_hard: true,
            })
        }
        if(selector === 'dogs'){
            this.setState({
                ...this.state,
                dogs: true,
            })
        }
        if(selector === 'cats'){
            this.setState({
                ...this.state,
                cats: true,
            })
        }
        if(selector === 'kids'){
            this.setState({
                ...this.state,
                kids: true,
            })
        }
        if(selector === 'other_animals'){
            this.setState({
                ...this.state,
                other_animals: true,
            })
        }
        if(selector === 'single_animal'){
            this.setState({
                ...this.state,
                single_animal: true,
            })
        }
        if(selector === 'dog_park'){
            this.setState({
                ...this.state,
                dog_park: true,
            })
        }
        if(selector === 'crowds'){
            this.setState({
                ...this.state,
                crowds: true,
            })
        }
        if(selector === 'apartment'){
            this.setState({
                ...this.state,
                apartment: true,
            })
        }
        if(selector === 'fence'){
            this.setState({
                ...this.state,
                fence: true,
            })
        }
        if(selector === 'leash'){
            this.setState({
                ...this.state,
                leash: true,
            })
        }
    }
    
  
  //need to figure out how to insert check boxes
  //make a list of what check boxes to make
  //figure out how to connect the check boxes to the db to filter through the animals

render() {  
    console.log("log", this.props.animalls);
    console.log(this.state);
    
    return (
        <>
    <div className="filters">
        <h1>Search For Your New Best Friend</h1>
        <h3>Use these to help figure out which of these wonderful creatures you are the best home for!</h3>
        <br />
        <div className="gender">
            <p>Gender</p>
            Female: <input type="checkbox" onClick={this.handleChangeFor('female')} className="gender-female"></input>
            Male: <input type="checkbox" onClick={this.handleChangeFor('male')} className="gender-male"></input>
        </div>
        <div className="size">
            <p>Size</p>
            Pocket Pet (-8 lbs): <input type="checkbox" onClick={this.handleChangeFor('xsmall')}className="size-xsmall"></input>
            Small (8-29 lbs): <input type="checkbox" onClick={this.handleChangeFor('small')}className="size-small"></input>
            Medium (30-55 lbs): <input type="checkbox" onClick={this.handleChangeFor('medium')}className="size-medium"></input>
            Large (56-89 lbs): <input type="checkbox" onClick={this.handleChangeFor('large')}className="size-large"></input>
            X-Large Lap Dogs (90+ lbs): <input type="checkbox" onClick={this.handleChangeFor('xlarge')}className="size-xlarge"></input>
        </div>
        <div className="shedding">
            <p>Shedding</p>
            Yes: <input type="checkbox" onClick={this.handleChangeFor('shedding')}className="shedding-yes"></input>
            No: <input type="checkbox" onClick={this.handleChangeFor('notshedding')}className="shedding-no"></input>
        </div>
        <div className="activity">
            <p>Activity Level</p>
            Couch Potato: <input type="checkbox" onClick={this.handleChangeFor('activity_xlow')} className="activity-xlow"></input>
            Low activity: <input type="checkbox" onClick={this.handleChangeFor('activity_low')} className="activity-low"></input>
            Medium activity: <input type="checkbox" onClick={this.handleChangeFor('activity_medium')} className="activity-medium"></input>
            High activity: <input type="checkbox" onClick={this.handleChangeFor('activity_high')} className="activity-high"></input>
            Athlete: <input type="checkbox" onClick={this.handleChangeFor('activity_xhigh')} className="activity-xhigh"></input>
        </div>
        <div className="training">
            <p>Trainability</p>
            Already trained in the basics: <input type="checkbox" onClick={this.handleChangeFor('train_basic')} className="training-basic"></input>
            Easily (or very food motivated): <input type="checkbox" onClick={this.handleChangeFor('train_easy')} className="training-easy"></input>
            Stubborn: <input type="checkbox" onClick={this.handleChangeFor('train_hard')} className="training-stubborn"></input>
        </div>
        {/* <div className="snuggle">
            Next Level Snuggler: <input type="checkbox" className="snuggle-aloof"></input>
        </div> */}
        <div className="interaction">
            <p>Other Creatures</p>
            Other dogs: <input type="checkbox" onClick={this.handleChangeFor('dogs')} className="creatures-dogs"></input>
            Cats: <input type="checkbox" onClick={this.handleChangeFor('cats')} className="creatures-cats"></input>
            Kids: <input type="checkbox" onClick={this.handleChangeFor('kids')} className="creatures-kids"></input>
            Other: <input type="checkbox" onClick={this.handleChangeFor('other_animals')} className="creatures-other"></input>
            Single Pet Household: <input type="checkbox" onClick={this.handleChangeFor('single_animal')} className="creatures-none"></input>
        </div>
        <div className="socialization">
            <p>What would you like to do with me?</p>
            Dog Park: <input type="checkbox" onClick={this.handleChangeFor('dog_park')} className="social-dogpark"></input>
            Be around multiple strangers at once: <input type="checkbox" onClick={this.handleChangeFor('crowds')} className="social-people"></input>
            Apartment Living: <input type="checkbox" onClick={this.handleChangeFor('apartment')} className="social-apartment"></input>
            Physical fence in yard: <input type="checkbox" onClick={this.handleChangeFor('fence')} className="social-physical-fence"></input>
            Calm on a leash: <input type="checkbox" onClick={this.handleChangeFor('leash')} className="social-leash-walking"></input>
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
