import React, { Component } from 'react';

class GreetingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '' 
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Nhập tên..."
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p>Xin chào, {this.state.name || 'bạn'}!</p>
      </div>
    );
  }
}

export default GreetingClass;
