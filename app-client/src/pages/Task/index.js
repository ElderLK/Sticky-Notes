import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

// criado por www.cursoonline.com
// proibida reprodução
// todos os direitos reservados

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
          <button className="excluir">X</button>
          <a href="#">
            <h2>{name}</h2>
            <p>{dueAt}</p>
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
