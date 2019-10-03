import React, { Component } from 'react';
class Counter extends Component {
  // constructor() {
  //   super();
  //   console.log('Constructor', this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: 50,
    fontWeight: 'bold'
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
    console.log('Increment Clicked', this);
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Click Me</button>
        {this.state.tags.length === 0 && 'Please create a new tag!'}
        {this.renderTags()}
        <button onClick={this.handleIncrement}>HI HANDLE EVENT</button>
        <button onClick={() => this.handleIncrement({ id: 1 })}>
          HANDLE EVENT
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
