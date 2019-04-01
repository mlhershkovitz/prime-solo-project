import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchPage.css';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button'
//check box code example at bottom of page!

//if need help figuring out the specific of this,
//look at any of the main components of the feedback app
const styles = theme => ({
    card: {
        maxWidth: 400,
        margin: 20
    }
});
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
        not_shedding: false,
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
        leash_walking: false,
    }

    //this will need to redirect to search results page with animal cards
    handleClick = () => {
        console.log('button clicked');
        this.props.dispatch({ type: 'FILTER_ANIMAL', payload: this.state });
        this.props.dispatch({ type: 'FETCH_ANIMAL' }); //gets the dog information inside the cards at the bottom of the page

    }


    handleChangeFor = selector => () => {
        if (selector === 'female') {
            this.setState({
                ...this.state,
                female: !this.state.female,
            })
        }
        if (selector === 'male') {
            this.setState({
                ...this.state,
                male: !this.state.male,
            })
        }
        if (selector === 'xsmall') {
            this.setState({
                ...this.state,
                xsmall: !this.state.xsmall,
            })
        }
        if (selector === 'small') {
            this.setState({
                ...this.state,
                small: !this.state.small,
            })
        }
        if (selector === 'medium') {
            this.setState({
                ...this.state,
                medium: !this.state.medium,
            })
        }
        if (selector === 'large') {
            this.setState({
                ...this.state,
                large: !this.state.large,
            })
        }
        if (selector === 'xlarge') {
            this.setState({
                ...this.state,
                xlarge: !this.state.xlarge,
            })
        }
        if (selector === 'shedding') {
            this.setState({
                ...this.state,
                shedding: !this.state.shedding,
            })
        }
        if (selector === 'notshedding') {
            this.setState({
                ...this.state,
                not_shedding: !this.state.not_shedding,
            })
        }
        if (selector === 'activity_xlow') {
            this.setState({
                ...this.state,
                activity_xlow: !this.state.activity_xlow,
            })
        }
        if (selector === 'activity_low') {
            this.setState({
                ...this.state,
                activity_low: !this.state.activity_low,
            })
        }
        if (selector === 'activity_medium') {
            this.setState({
                ...this.state,
                activity_medium: !this.state.activity_medium,
            })
        }
        if (selector === 'activity_high') {
            this.setState({
                ...this.state,
                activity_high: !this.state.activity_high,
            })
        }
        if (selector === 'activity_xhigh') {
            this.setState({
                ...this.state,
                activity_xhigh: !this.state.activity_xhigh,
            })
        }
        if (selector === 'train_basic') {
            this.setState({
                ...this.state,
                train_basic: !this.state.train_basic,
            })
        }
        if (selector === 'train_easy') {
            this.setState({
                ...this.state,
                train_easy: !this.state.train_easy,
            })
        }
        if (selector === 'train_hard') {
            this.setState({
                ...this.state,
                train_hard: !this.state.train_hard,
            })
        }
        if (selector === 'dogs') {
            this.setState({
                ...this.state,
                dogs: !this.state.dogs,
            })
        }
        if (selector === 'cats') {
            this.setState({
                ...this.state,
                cats: !this.state.cats,
            })
        }
        if (selector === 'kids') {
            this.setState({
                ...this.state,
                kids: !this.state.kids,
            })
        }
        if (selector === 'other_animals') {
            this.setState({
                ...this.state,
                other_animals: !this.state.other_animals,
            })
        }
        if (selector === 'single_animal') {
            this.setState({
                ...this.state,
                single_animal: !this.state.single_animal,
            })
        }
        if (selector === 'dog_park') {
            this.setState({
                ...this.state,
                dog_park: !this.state.dog_park,
            })
        }
        if (selector === 'crowds') {
            this.setState({
                ...this.state,
                crowds: !this.state.crowds,
            })
        }
        if (selector === 'apartment') {
            this.setState({
                ...this.state,
                apartment: !this.state.apartment,
            })
        }
        if (selector === 'fence') {
            this.setState({
                ...this.state,
                fence: !this.state.fence,
            })
        }
        if (selector === 'leash') {
            this.setState({
                ...this.state,
                leash_walking: !this.state.leash,
            })
        }
     

    }


    //need to figure out how to insert check boxes
    //make a list of what check boxes to make
    //figure out how to connect the check boxes to the db to filter through the animals

    render() {
        console.log("log", this.props.getAnimal);
        // console.log('tj',this.props.animalList);
        console.log(this.state);

        const { classes } = this.props; //allows us to use material ui cards 


        return (
            <>
                <div className="filter">
                    <h1>Search For Your New Best Friend</h1>
                    <h3>Use the following filters to help you find the right animal for you!</h3>
                    <br />
                    <div className="filter">
                        <span className="filterHeadings">What gender would you prefer?</span>
                        <br />
                        Female: <input type="checkbox" onClick={this.handleChangeFor('female')} className="box"></input>
                        Male: <input type="checkbox" onClick={this.handleChangeFor('male')} className="box"></input>
                    </div>
                    <div className="filter">
                        <span className="filterHeadings">What size will fit best in your home? </span>
                        <br />
                        Pocket Pet (-8 lbs): <input type="checkbox" onClick={this.handleChangeFor('xsmall')} className="box"></input>
                        Small (8-29 lbs): <input type="checkbox" onClick={this.handleChangeFor('small')} className="box"></input>
                        Medium (30-55 lbs): <input type="checkbox" onClick={this.handleChangeFor('medium')} className="box"></input>
                        <br />
                        Large (56-89 lbs): <input type="checkbox" onClick={this.handleChangeFor('large')} className="box"></input>
                        X-Large Lap Dogs (90+ lbs): <input type="checkbox" onClick={this.handleChangeFor('xlarge')} className="box"></input>
                    </div>
                    <div className="filter">
                        <span className="filterHeadings">Are you okay with a shedding animal?</span>
                        <br />
                        Yes: <input type="checkbox" onClick={this.handleChangeFor('shedding')} className="box"></input>
                        No: <input type="checkbox" onClick={this.handleChangeFor('not_shedding')} className="box"></input>
                    </div>
                    <div className="filter">
                        <span className="filterHeadings">How much activity can you handle?</span>
                        <br />
                        Couch Potato: <input type="checkbox" onClick={this.handleChangeFor('activity_xlow')} className="box"></input>
                        Low activity: <input type="checkbox" onClick={this.handleChangeFor('activity_low')} className="box"></input>
                        Medium activity: <input type="checkbox" onClick={this.handleChangeFor('activity_medium')} className="box"></input>
                        High activity: <input type="checkbox" onClick={this.handleChangeFor('activity_high')} className="box"></input>
                        Athlete: <input type="checkbox" onClick={this.handleChangeFor('activity_xhigh')} className="box"></input>
                    </div>
                    <div className="filter">
                        <span className="filterHeadings">How trainable/trained would you like the animal to be?</span>
                        <br />
                        Already trained in the basics: <input type="checkbox" onClick={this.handleChangeFor('train_basic')} className="box"></input>
                        Easily (or very food motivated): <input type="checkbox" onClick={this.handleChangeFor('train_easy')} className="box"></input>
                        Stubborn: <input type="checkbox" onClick={this.handleChangeFor('train_hard')} className="box"></input>
                    </div>
                    {/* <div className="snuggle">
            Next Level Snuggler: <input type="checkbox" className="snuggle-aloof"></input>
        </div> */}
                    <div className="filter">
                        <span className="filterHeadings">Do you have other creatures in your household?</span>
                        <br />
                        Other dogs: <input type="checkbox" onClick={this.handleChangeFor('dogs')} className="box"></input>
                        Cats: <input type="checkbox" onClick={this.handleChangeFor('cats')} className="box"></input>
                        Kids: <input type="checkbox" onClick={this.handleChangeFor('kids')} className="box"></input>
                        Other: <input type="checkbox" onClick={this.handleChangeFor('other_animals')} className="box"></input>
                        Single Pet Household: <input type="checkbox" onClick={this.handleChangeFor('single_animal')} className="box"></input>
                    </div>
                    <div className="filter">
                        <span className="filterHeadings">What kinds of activities would you like to do with your new pet?</span>
                        <br />
                        Dog Park: <input type="checkbox" onClick={this.handleChangeFor('dog_park')} className="box"></input>
                        Be around multiple strangers at once: <input type="checkbox" onClick={this.handleChangeFor('crowds')} className="box"></input>
                        Apartment Living: <input type="checkbox" onClick={this.handleChangeFor('apartment')} className="box"></input>
                        <br />
                        Physical fence in yard: <input type="checkbox" onClick={this.handleChangeFor('fence')} className="box"></input>
                        Calm on a leash: <input type="checkbox" onClick={this.handleChangeFor('leash_walking')} className="box"></input>
                    </div>

                    <button className="searchButton" onClick={this.handleClick}>Search 🐶</button>


{/* new way of displaying the dog information in the cards, can choose to get all the information but doesnt always work */}
                        {this.props.animalList.map((animal) => (
                            <Card className={classes.card}>
                                <div>
                                    <a href="#/all-animals/">{animal.name} </a>
                                    <br />
                                    <img src={animal.img_url} />
                                    
                                    
                                </div>
                            </Card>
                        ))
                    }
                
                </div>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(withStyles(styles)(SearchPage));

//code for the check boxes
//myFunction = () => {
//    var x = document.getElementById("myCheck");
//    x.checked = true;
//  }

//this goes in the return
//        <input type="checkbox" id="myCheck"></input>
