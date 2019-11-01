import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import http from './services/httpService';
import config from './config.json';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    // It returns the result in promise
    // pending > resolved (success) OR rejected (failure)
    const { data: posts } = await http.get(config.apiEndpoint);

    this.setState({ posts });
  }

  handleAdd = async () => {
    console.log('Add');
    const obj = { title: 'a', body: 'b' };
    const { data: post } = await http.post(config.apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
    console.log(post);
  };

  handleUpdate = async post => {
    post.title = 'UPDATED';
    const { data } = await http.put('s' + config.apiEndpoint + '/' + post.id);
    const posts = [...this.state.posts];

    const index = posts.indexOf(post);
    post[index] = { ...post };
    this.setState({ posts });
    console.log('Update', data);
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
      await http.delete('s' + config.apiEndpoint + '/' + post.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert('this post has already been deleted');

      this.setState({ posts: originalPosts });

      // Expected (404 : not found, 400 : bad request) - CLIENT ERRORS
      // - Display a specific error message

      // Unexpected (network down, server down, db down, bug)
      // - Log Them
      // - Display a genric and friendly error message
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
