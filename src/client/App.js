import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import Cluster from './components/Cluster';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    // const { username } = this.state;
    return (<Cluster pods={Array.from(Array(50).keys())} />);
  }
}
