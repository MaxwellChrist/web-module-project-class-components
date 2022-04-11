import React from 'react'

export default class Todo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <li>{this.props.task.task}</li>
    )
  }
}
