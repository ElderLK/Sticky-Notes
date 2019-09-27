import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import Moment from "moment";

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

  handleDelete = async e => {
    console.log("Delete");
    const { id } = e.target;
    const response = await api.delete(`tasks/${id}`);
    this.componentDidMount();
  };

  handleUndelete = async e => {
    console.log("Undelete");
    const { id } = e.target;
    const response = await api.patch(`/tasks/${id}/restore`);
    this.componentDidMount();
  };

  renderTableData() {
    return this.state.tasks.map((task, index) => {
      const { id, name, description, status, dueAt, deleted_at } = task;
      return (
        <li key={id}>
          {deleted_at ? (
            <button
              className="desfazer"
              id={id}
              onClick={this.handleUndelete}
              title="Desfazer Exclusão"
            >
              ⎌
            </button>
          ) : (
            <button
              className="excluir"
              id={id}
              onClick={this.handleDelete}
              title="Excluir"
            >
              X
            </button>
          )}
          <a href="#">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{!!deleted_at ? "DELETED" : status.toUpperCase()}</p>
            <p>{Moment(dueAt).format("d/MMM/YYYY")}</p>
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
