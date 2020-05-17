import React, { Component } from 'react';
import User from './User.js';

class UserList extends Component {
  state = {
   numgamesplayed: true 
  }

  toggleNumGames = () => {
	this.state.numgamesplayed ? 
      this.setState({ numgamesplayed: false }) 
    : this.setState({ numgamesplayed: true }) 
  }
  
 	render() {
    	return (
          <div>
          	<button onClick={this.toggleNumGames}>{ this.state.numgamesplayed ? 'Hide' : 'Show' } the Number of Games Played</button>
          	<ol>
          		{this.props.users.map((user, index) => <User index={index} user={user} numgamesplayed={this.state.numgamesplayed}/>)}
          	</ol>
          </div>);
   	}
}

export default UserList