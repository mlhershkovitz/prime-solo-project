import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
    render () {
        return(
            <>
            <h1>Pawnder</h1>
            </>
        )
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  };
  
  export default connect(mapReduxStateToProps)(Home);
