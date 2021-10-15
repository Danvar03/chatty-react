import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { signup } from "../helpers/auth";
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div>
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
          <h1>
            Sign Up to
            <Link className="title ml-2" to="/">Chatty</Link>
          </h1>
          <p className="lead">Complete el formulario para crear una cuenta.</p>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            ></input>
          </div>
          <div>
            {this.state.error ? <p>{this.state.error}</p> : null}
            <button className="btn btn-primary px-5" type="submit">Sign up</button>
            <p>Or</p>
            <button className="btn btn-danger mr-2" onClick={this.googleSignIn} type="button">
              Sign up with Google
            </button>
            <button className="btn btn-secondary" type="button" onClick={this.githubSignIn}>
              Sign up with GitHub
            </button>
          </div>
          <hr></hr>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}
