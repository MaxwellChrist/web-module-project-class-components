import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

let tasks = [
  {
    id: 1,
    task: "walk the dog",
    completed: false
  },
  {
    id: 2,
    task: "Learn React",
    completed: false
  },
  {
    id: 3,
    task: "Have fun",
    completed: false
  }
]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks,
    }
  }
  render() {
    return (
      <div>
        <TodoList tasks={tasks} />
      </div>
    )
  }
}
