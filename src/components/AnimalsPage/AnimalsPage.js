import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import classnames from 'classnames';



const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 20
  },
  media: {
    height: 0,
    paddingTop: '67.25%',
  },
  actions: {
    display: 'flex',
  },
  typography: {
    useNextVariants: true,
  },
// for potential future usage
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

//need to figure out the material ui cards!
class AnimalsPage extends Component {
    state = {
      expanded: false,
      heartToggle: false,
    };
    // for potential future use    
    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };

    // toggles state of heart button icon when clicked and determines which version of icon is displayed on DOM     
    toggleHeart = () => {
      if (!this.state.heartToggle) {
        this.setState({
            heartToggle: true,
          })
      } 
      else {
        this.setState({
            heartToggle: false,
          })
        }
      }
      
      // outputs version of heart icon to DOM based on current state of 'heartToggle'
    displayHeart = () => {
      if (this.state.heartToggle) {
        return <FavoriteIcon style={{ color: '#c95f76' }} />
      }
      else {
        return <FavoriteIcon />
      }
    }


  //component did mount to make sure the page loads correctly
  componentDidMount() {
     this.getAnimals();    
  };// end component did mount

  //will for sure need get request in here
  getAnimals() {
    this.props.dispatch({ type: 'FETCH_ANIMAL' });
  };//end get dispatch to saga
  
  //display the animals on cards

  
render() { 
  console.log(this.props.animalList);
  const { classes } = this.props;
   
    return (
      <div className="">
      <h1>All Animals</h1>
      
      <div className="item-div">
        
        {this.props.animalList.map((animal) => (
      <Grid key={animal.id} item xs={12} sm={4}>
          <Card className={classes.card} >
              <CardHeader
                    action={
                      <IconButton>
                        <MoreVertIcon />
                        </IconButton>
                        }
                        title={animal.name}/>
              
              <div className="card-image">
                        <CardMedia
                            style={{ height: '60px' }}
                            className={classes.media}
                            image={animal.img_url}
                            title={animal.name}
                        />
              </div>
              <CardContent style={{ marginTop: '3px', marginBottom: '3px', height: '90px' }}>
                  <Typography component="p">
                            {animal.comments}
                  </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton aria-label="Add to favorites" onClick={this.toggleHeart}>
                        {this.displayHeart()}
                  </IconButton>
                  <IconButton aria-label="Dog Bio" >
                      <a href={animal.dog_bio}
                            target="_blank" rel="noopener noreferrer">
                      {/* <i class="fab fa-github fa-lg"></i> */}
                      </a>
                  </IconButton>
                  {/* {this.props.project.tag_name && <><Typography style={{ marginRight: '8px', marginLeft: '4px' }}>tags: </Typography> */}
                  <IconButton
                      className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                              })}
                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                      aria-label="Show more">
                      <ExpandMoreIcon />
                  </IconButton>
              </ CardActions>

              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Learn more:</Typography>
                          <Typography paragraph>
                            {animal.gender}
                          </Typography>
                          
                          <Typography paragraph>
                          {animal.age}
                          </Typography>
                          
                          <Typography paragraph>
                          {animal.size}
                          </Typography>
                          
                          <Typography paragraph>
                          {animal.breed}
                          </Typography>
                          
                          <Typography paragraph>
                          {animal.coat}
                          </Typography>
                          
                          <Typography paragraph>
                          {animal.house_trained}
                          </Typography>
                          
                          <Typography paragraph>
                          {animal.fixed}
                          </Typography>
                          
                          <Typography paragraph>
                          {animal.health_needs}
                          </Typography>
                    </CardContent>
              </Collapse>
          {/* <div className="item-info">
          <h6>{animal.name}</h6>
          <img  src={animal.img_url} alt="dog-image" />
          <ul>
            <li>{animal.gender}</li>
            <li>{animal.age}</li>
            <li>{animal.size}</li>
            <li>{animal.breed}</li>
            <li>{animal.coat}</li>
            <li>{animal.house_trained}</li>
            <li>{animal.fixed}</li>
            <li>{animal.health_needs}</li>
            <li>{animal.comments}</li>
            {/* <li>{animal.img_url}</li>
            <li>{animal.dog_bio}</li> */}
          {/* </ul>
        </div> */}
        </Card>
      </Grid>
      ))}
      </div>
    </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(withStyles(styles)(AnimalsPage));