import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";
import api from "../../services/api";
import Task from "../Task";

export default class Main extends Component {
  state = {
    id: "",
    name: "",
    description: "",
    status: "",
    dueAt: "",
    created_at: "",
    updated_at: "",
    deleted_at: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post("tasks", {
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
      dueAt: this.state.dueAt
    });
    this.setState(response.data);
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          {/* <img src={logo} alt="Sticky Logo"/> */}
          <input
            placeholder="Nome"
            id="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            placeholder="Descrição"
            id="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <input
            type="date"
            id="dueAt"
            value={this.state.dueAt}
            onChange={this.handleInputChange}
          />
          <select
            id="status"
            value={this.state.status}
            onChange={this.handleInputChange}
          >
            <option value="draft">draft</option>
            <option value="done">done</option>
            <option value="undone">undone</option>
            <option value="delayed">delayed</option>
          </select>
          <button type="submit">Criar</button>
        </form>
        <Task key={this.state.id} setTask={this.state} />
      </div>
    );
  }
}
