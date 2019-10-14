// Importing React Component from react so that we can use functionality of react
// Our Counter class inheriting some functionality from Component Class from 'react' module
import React, { Component } from 'react';
class Counter extends Component {
  // state is a speacial property aka object in React, it includes any data that this component needs
  // props includes the data that we give to a component
  // state contains the data that is local or private to a component
  // props is read only
  /*
  state = {
    value: this.props.counter.value
  };
  */

  style = {
    fontSize: '15px',
    textAlign: 'center',
    marginTop: '30px'
  };

  // Format of the Counter if its 0 then it will display it in Strings
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'ZERO' : count;
  }

  // Handling Events
  // Updating the State of Badge
  /*
  handleIncrement = () => {
    console.log('+1', this);
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };
  */

  // Rendering Classes Dynamically
  getBadgeClasses() {
    let classes = 'badge m-2 ';
    classes +=
      this.props.counter.value === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }
  render() {
    // Every react component has property called props. It is just a plain JS Objects hold all the attributes we defined in the Counter components
    // Here Counter component is raising the event and its parent component is handling the event.
    console.log('Counter Rendered');
    //console.log('props', this.props);
    return (
      <div style={this.style} className="container">
        <h1
          style={{ fontWeight: 'bold', color: 'green', marginBottom: '20px' }}
        >
          Kounter Singh
        </h1>
        <hr />

        <div className="row">
          <div className="col-1">
            <span
              style={{ fontSize: '17px' }}
              className={this.getBadgeClasses()}
            >
              {this.formatCount()}
            </span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-md"
            >
              +
            </button>

            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-danger btn-md m-2"
              disabled={this.props.counter.value === 0 ? 'disabled' : ''}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-md"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
