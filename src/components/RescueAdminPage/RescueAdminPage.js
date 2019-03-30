import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

//if need help figuring out the specific of this,
//look at any of the main components of the feedback app

//need to figure out the material ui cards!
class RescueAdminPage extends Component {

  state = {
    redirect: false,
  }

  componentDidMount() {
    this.getAnimals();
  };// end component did mount

  getAnimals() {
    this.props.dispatch({ type: 'FETCH_ANIMAL' });
  };//end get dispatch to saga
  
    //add animal form
    //this needs to include either the same check boxes as the search page
    //or radio buttons along with and input space for the written bio
    //MUST INCLUDE a place to upload photos

  //display the animals in a table with a delete button
  //put in a button to switch an animal to a "success story" table
  handleDelete=(value)=>(event)=>{
    console.log(event.target.value)
    this.props.dispatch({type: 'DELETE_ME', payload: event.target.value})
  }
  //if there's time to implement this

  // handleAdopt=(value)=>(event)=>{
  //   console.log(event.target.value)
  //   this.props.dispatch({type: 'ADOPT_ME', payload: event.target.value})
  // }

  handleClickAdd = (event) => {
    event.preventDefault();
    console.log('button clicked');
    this.props.history.push('/add-animal');
  } //end click add button



render() { 

    return (
      <>
    <div>
        <h1>Rescue Admin</h1>
        <button onClick={this.handleClickAdd}>Add An Animal</button>
    </div>
    <br />
    <br />
    <div className="rescueTable">
      <Table>
        <TableHead className="table">
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Size</th>
          <th>Breed</th>
          <th>Coat</th>
          <th>House-trained</th>
          <th>Fixed</th>
          <th>Health Needs</th>
          <th>Comments</th>
          <th>Delete</th>
          <th>Adopted!</th>
        </tr>
        </TableHead>
        <TableBody>
      {this.props.animalList.map((animal) => (
          
          <TableRow key={animal.id}>
            <TableCell><Link className="puppy-links" to="/add-attribute">{animal.name}</Link></TableCell>
            <TableCell>{animal.gender}</TableCell>
            <TableCell>{animal.age}</TableCell>
            <TableCell>{animal.size}</TableCell>
            <TableCell>{animal.breed}</TableCell>
            <TableCell>{animal.coat}</TableCell>
            <TableCell>{animal.house_trained}</TableCell>
            <TableCell>{animal.fixed}</TableCell>
            <TableCell>{animal.health_needs}</TableCell>
            <TableCell>{animal.comments}</TableCell>

            <TableCell><button value={animal.id} 
            onClick={this.handleDelete(this.value)}>Delete</button></TableCell>
            {/* <TableCell><button value={animal.id} 
            onClick={this.handleAdopt(this.value)}>Adopted</button></TableCell> */}
          </TableRow>
        ))}
        </TableBody>
      </Table>
      </div>
    </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(RescueAdminPage);