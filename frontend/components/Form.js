import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      initial: "",
    }
  }

  handleChange = (e) => {
    console.log(this.state.handleChange);
    this.setState({
      initial: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(e, this.state.initial);
    this.setState({
      initial: "",
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            placeholder="Enter New Task Here" 
            type="text" 
            name="task" 
            value={this.state.initial} 
            onChange={this.handleChange} 
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
