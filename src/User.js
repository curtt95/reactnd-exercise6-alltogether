import React, { Component } from 'react';

class User extends Component {
 	render() {
    	return (
          	<li key={this.props.index}>{this.props.user.username} played { this.props.numgamesplayed ? this.props.user.gamesplayed : '/*' } games</li>
        );
   	}
}

export default User