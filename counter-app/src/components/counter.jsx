// Importing React Component from react so that we can use functionality of react
// Our Counter class inheriting some functionality from Component Class from 'react' module
import React, { Component } from 'react';
class Counter extends Component {
  // state is a speacial property aka object in React, it includes any data that this component needs
  state = {
    count: 0
  };

  style = {
    fontSize: '15px',
    textAlign: 'center',
    marginTop: '30px'
  };

  // Format of the Counter if its 0 then it will display it in Strings
  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'ZERO' : count;
  }

  // Handling Events
  // Updating the State of Badge
  handleIncrement = () => {
    console.log('+1', this);
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Rendering Classes Dynamically
  getBadgeClasses() {
    let classes = 'badge m-2 ';
    classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }
  render() {
    return (
      <div style={this.style} className="container">
        <h1
          style={{ fontWeight: 'bold', color: 'green', marginBottom: '20px' }}
        >
          Kounter Singh
        </h1>
        <hr />
        <span style={{ fontSize: '17px' }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-md"
        >
          INCREMENT
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-danger btn-md m-2"
        >
          DECREMENT
        </button>
      </div>
    );
  }
}

export default Counter;
