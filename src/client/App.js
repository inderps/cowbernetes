import React, { Component } from 'react';
import Village from './components/Village';

export default class App extends Component {
  // state = { username: null };

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    const controllers = [{ name: 'app', pods: Array.from(Array(50).keys()) }, { name: 'journey-service', pods: Array.from(Array(5).keys()) },
      { name: 'ingestor-service', pods: Array.from(Array(10).keys()) }, { name: 'delivery-service', pods: Array.from(Array(5).keys()) },
      { name: 'config-service', pods: Array.from(Array(7).keys()) }, { name: 'react-dashboard', pods: Array.from(Array(5).keys()) }];
    // const { username } = this.state;
    return (<Village controllers={controllers} />);
  }
}
