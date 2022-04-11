import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map(item => {
          return (
            <Todo toggleTasks={this.props.toggleTasks} task={item} key={item.id} />
            )
          })}
      </ul>
    )
  }
}
