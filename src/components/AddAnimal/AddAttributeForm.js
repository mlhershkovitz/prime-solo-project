import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddAttributeForm extends Component {
    state = {
        female: null,
        male: null,
        xsmall: null,
        small: null,
        medium: null,
        large: null,
        xlarge: null,
        shedding: null,
        not_shedding: null,
        activity_xlow: null,
        activity_low: null,
        activity_medium: null,
        activity_high: null,
        activity_xhigh: null,
        train_basic: null,
        train_easy: null,
        train_hard: null,
        dogs: null,
        cats: null,
        kids: null,
        other_animals: null,
        single_animal: null,
        dog_park: null,
        crowds: null,
        apartment: null,
        fence: null,
        leash_walking: null,
    }
  

    //dispatch post request
  
    
  render() { 
    //console.log(this.props.animalList);
    return (
    <div>
        <h1>Add an Animal</h1>
        <div>
            <h6>Click on whichever attribute best describes your new arrival.</h6>
            <ul>
                <li>
                    Gender:
                    <label>
                        <input
                        type="radio"
                        value="female"
                        checked={this.state.gender.female === "female"}
                        onChange={this.handleChange('female')}/>
                        Female
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="male"
                        checked={this.state.gender.male === "male"}
                        onChange={this.handleChange('male')}/>
                        Male
                    </label>
                </li>
                <li>
                    Size:
                    <label>
                        <input
                        type="radio"
                        value="xsmall"
                        checked={this.state.xsmall === "xsmall"}
                        onChange={this.handleChange('xsmall')}/>
                        X-Small (-8 lbs)
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="small"
                        checked={this.state.small === "small"}
                        onChange={this.handleChange('small')}/>
                        Small (8-29 lbs)
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="medium"
                        checked={this.state.medium === "medium"}
                        onChange={this.handleChange('medium')}/>
                        Medium (30-55 lbs)
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="large"
                        checked={this.state.large === "large"}
                        onChange={this.handleChange('large')}/>
                        Large (56-89 lbs)
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="xlarge"
                        checked={this.state.xlarge === "xlarge"}
                        onChange={this.handleChange('xlarge')}/>
                        X-Large (90+ lbs)
                    </label>
                    
                    
                </li>
                <li>
                    Shedding:
                    <label>
                        <input
                        type="radio"
                        value="shedding"
                        checked={this.state.shedding === "shedding"}
                        onChange={this.handleChange('shedding')}/>
                        Shedding
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="not_shedding"
                        checked={this.state.not_shedding === "not_shedding"}
                        onChange={this.handleChange('not_shedding')}/>
                        Not Shedding
                    </label>
                    
                </li>
                <li>
                    Activity Level:
                    <label>
                        <input
                        type="radio"
                        value="activity_xlow"
                        checked={this.state.activity_xlow === "activity_xlow"}
                        onChange={this.handleChange('activity_xlow')}/>
                        Couch Potato
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="activity_low"
                        checked={this.state.activity_low === "activity_low"}
                        onChange={this.handleChange('activity_low')}/>
                        Low Activity
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="activity_medium"
                        checked={this.state.activity_medium === "activity_medium"}
                        onChange={this.handleChange('activity_medium')}/>
                        Medium Activity
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="activity_high"
                        checked={this.state.activity_high === "activity_high"}
                        onChange={this.handleChange('activity_high')}/>
                        High Activity
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="activity_xhigh"
                        checked={this.state.activity_xhigh === "activity_xhigh"}
                        onChange={this.handleChange('activity_xhigh')}/>
                        Extra High
                    </label>
                </li>
                <li>
                    Training So Far:
                    <label>
                        <input
                        type="radio"
                        value="train_basic"
                        checked={this.state.train_basic === "train_basic"}
                        onChange={this.handleChange('train_basic')}/>
                        Knows the basics
                    </label>
                </li>
                <li>
                    Trainability
                    <label>
                        <input
                        type="radio"
                        value="train_easy"
                        checked={this.state.train_easy === "train_easy"}
                        onChange={this.handleChange('train_easy')}/>
                        Easy or food motivated
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="train_hard"
                        checked={this.state.train_hard === "train_hard"}
                        onChange={this.handleChange('train_hard')}/>
                        Stubborn
                    </label>
                </li>
                <li>
                    What other creatures are they okay with?
                    <label>
                        <input
                        type="radio"
                        value="dogs"
                        checked={this.state.dogs === "dogs"}
                        onChange={this.handleChange('dogs')}/>
                        Dogs
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="cats"
                        checked={this.state.cats === "cats"}
                        onChange={this.handleChange('cats')}/>
                        Cats
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="kids"
                        checked={this.state.kids === "kids"}
                        onChange={this.handleChange('kids')}/>
                        Kids
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="other_animals"
                        checked={this.state.other_animals === "other_animals"}
                        onChange={this.handleChange('other_animals')}/>
                        Other animals
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="single_animal"
                        checked={this.state.single_animal === "single_animal"}
                        onChange={this.handleChange('single_animal')}/>
                        Single Animal Household
                    </label>
                </li>
                <li>
                    What activities would I be okay with participating in?
                    <label>
                        <input
                        type="radio"
                        value="dog_park"
                        checked={this.state.dog_park === "dog_park"}
                        onChange={this.handleChange('dog_park')}/>
                        Dog Park
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="not_shedding"
                        checked={this.state.not_shedding === "not_shedding"}
                        onChange={this.handleChange('not_shedding')}/>
                        Not Shedding
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="small"
                        checked={this.state.small === "small"}
                        onChange={this.handleChange('small')}/>
                        Small (8-29 lbs)
                    </label>
                </li>
                <li>
                    Shedding:
                    <label>
                        <input
                        type="radio"
                        value="shedding"
                        checked={this.state.shedding === "shedding"}
                        onChange={this.handleChange('shedding')}/>
                        Shedding
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="not_shedding"
                        checked={this.state.not_shedding === "not_shedding"}
                        onChange={this.handleChange('not_shedding')}/>
                        Not Shedding
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="small"
                        checked={this.state.small === "small"}
                        onChange={this.handleChange('small')}/>
                        Small (8-29 lbs)
                    </label>
                </li>

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
          ))}
      </div>
      );
    }
  }
  
  const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  };
  
  export default connect(mapReduxStateToProps)(AddAttributeForm);