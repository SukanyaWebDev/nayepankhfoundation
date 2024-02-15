import React, { Component } from 'react';
import Sidebar from '../SideBar';
import './index.css'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    const {history}=this.props
    event.preventDefault();
    const { username, password } = this.state;

    
    localStorage.setItem('personName', username);
    history.push("/")
    
  }

  render() {
    const { username, password } = this.state;
    console.log("hi")

    return (
      <div className="login-container">
        
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={this.handleChange} required placeholder='enter name'/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={this.handleChange} required placeholder='enter pasword'/>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
