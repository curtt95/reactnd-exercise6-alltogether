import React, { Component } from 'react';

class AddUser extends Component {
  	state = {
      firstname: '',
      surname: '',
      username: '',
      userexists: false
    }

	handleFirstNameChange = event => {
    	this.setState({ firstname: event.target.value });
    }

	handleSurnameChange = event => {
    	this.setState({ surname: event.target.value });
    }

	handleUsernameChange = event => {
    	this.setState({ username: event.target.value });
    }

	handleAddUser = event => {
      event.preventDefault();
      
      const userExists = this.isValid(this.state.username);
      
      if (userExists) {
        const newuser = {
          firstname: this.state.firstname,
          surname: this.state.surname,
          username: this.state.username,
          gamesplayed: 0
        }
        
        this.setState({ userexists: false });

        this.props.addUser(newuser);

        this.resetUser();
      } else {
        this.setState({ userexists: true });
      }
    }

    resetUser = () => {
		this.setState({ 
          firstname: '',
          surname: '',
          username: '' 
        });
    }

	isValid = username => {
      const filteredArr = this.props.users.filter(user => user.username === username);
      return (filteredArr.length > 0) ? false : true;
    }
  
 	render() {
    	return (
        	<form onSubmit={this.handleAddUser}>
              <input
                type="text"
                placeholder="First Name"
                value={this.state.firstname}
                onChange={this.handleFirstNameChange}
              />
			<input
                type="text"
                placeholder="Surname"
                value={this.state.surname}
                onChange={this.handleSurnameChange}
              />
			<input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
              <button /*disabled={this.props.isValid}*/>Add</button>
			{ this.state.userexists ? <b>Username already exists</b> : '' }
            </form>
        );
   	}
}

export default AddUser