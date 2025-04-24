import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // Khởi tạo state
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }); // Cập nhật state
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Tăng</button>
      </div>
    );
  }
}