import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
    
    handleClick = (event) => {
        event.preventDefault();
        console.log('started button clicked');
        this.props.history.push('/search');
      } //end click start button
      
    handleClickAdd = (event) => {
        event.preventDefault();
        console.log('button clicked');
        this.props.history.push('/all-animal');
      } //end click add button
    render () {
        return(
            <>
            <h1>Welcome, to Pawnder!</h1>
            <br />
            <h1>Helping Connect the Right People to the Right Animals</h1>
            <h5>Find the Animal That Fits the Best With Your Family and Personality</h5>
            <br />
            <button onClick={this.handleClick}>Get Started</button>
            <button onClick={this.handleClickAll}>Browse All</button>

            </>
        )
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  };
  
  export default connect(mapReduxStateToProps)(Home);
