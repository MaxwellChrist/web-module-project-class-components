import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
import Todo from './Todo'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
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
    }
  }

  add = (e, task) => {
    const newItem = {
      id: Date.now(),
      task: task,
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newItem]
    })
  }

  toggleTasks = (itemId) => {
    console.log(itemId);
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
        return item
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <TodoList tasks={this.state.tasks} toggleTasks={this.toggleTasks} />
        <Form add={this.add} />
        <button>Hide Completed</button>
      </div>
    )
  }
}
