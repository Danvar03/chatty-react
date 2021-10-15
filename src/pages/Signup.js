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
      
      <div className="home-app">
       <img src="https://www.sofka.com.co/wp-content/uploads/2021/02/sofkau-logo-horizontal.png"/>
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
          <h1>
            REGISTRATE
            <Link className="title ml-2" to="/">Chatty</Link>
          </h1>
          <p className="lead">Complete el formulario para crear una cuenta.</p>
          <div className="form-group container-input">
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            ></input>
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
            <button className="boton-crear" type="submit">Registrar Email</button>
          
            <button className="boton-crear" onClick={this.googleSignIn} type="button">
              Registrar con Google
            </button>
            <button className="boton-crear" type="button" onClick={this.githubSignIn}>
            Registrar sesión GitHub
            </button>
          </div>
          <hr></hr>
          <p>
          Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>
        </form>
      </div>
    );
  }
}
