import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <li onClick={() => this.props.toggleTasks(this.props.task.id)}>{this.props.task.task}{this.props.task.completed ? " ✔️" : ""}</li>
    )
  }
}
