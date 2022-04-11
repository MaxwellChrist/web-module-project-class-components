import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    // console.log(this.props.tasks);
    return (
      <ul>
        {this.props.tasks.map(item => {
          return (
            <Todo task={item} key={item.id} />
            )
          })}
      </ul>
    )
  }
}
