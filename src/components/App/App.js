import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import SearchPage from '../SearchPage/SearchPage';
import ResultsPage from '../ResultsPage/ResultsPage';
import AnimalsPage from '../AnimalsPage/AnimalsPage';

import UserPage from '../UserPage/UserPage';
import RescueAdminPage from '../RescueAdminPage/RescueAdminPage';
import AddAnimalForm from '../AddAnimal/AddAnimalForm';
import './App.css';
import AddAttributeForm from '../RescueAdminPage/AddAttributeForm';
import Home from '../Home/Home';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              exact
              path="/search"
              component={SearchPage}
            />
            <Route
              exact
              path="/results"
              component={ResultsPage}
            />
            <Route
              exact
              path="/all-animals"
              component={AnimalsPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/login"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/rescue-admin"
              component={RescueAdminPage}
            />
            <ProtectedRoute
              exact
              path="/add-animal"
              component={AddAnimalForm}
            />
            <ProtectedRoute
              exact
              path="/add-attribute"
              component={AddAttributeForm}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
