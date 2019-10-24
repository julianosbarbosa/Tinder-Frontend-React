import React, { Component } from "react";
import api from "../services/api";
import "./Login.css";
import Logo from "../assets/logo.svg";

export default class Login extends Component {
  state = {
    username: ""
  };

  handleChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { username } = this.state;
    if (!username.length) {
      return;
    }
    const response = await api.post("/devs", {
      username
    });
    const { _id } = response.data;
    this.props.history.push(`/dev/${_id}`);
  };

  render() {
    const { username } = this.state;

    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit}>
          <img src={Logo} alt="Logo" />
          <input
            type="text"
            placeholder="Digite o seu usuario o Github"
            onChange={this.handleChange}
            value={username}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
