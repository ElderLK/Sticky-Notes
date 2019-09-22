import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  async componentDidMount() {
    const response = await api.get("tasks");
    this.setState({ tasks: response.data });
  }

  renderTableData() {
    return this.state.tasks.map((task, index) => {
      const { id, name, status, dueAt } = task;
      return (
        <li key={id}>
          <a href="#">
            <h2>{name}</h2>
            <p>{status}</p>
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderTableData()}</ul>
      </div>
    );
  }
}
