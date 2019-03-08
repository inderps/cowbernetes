import React, { Component } from 'react';
import Village from './components/Village';

export default class App extends Component {
  state = { controllers: [] };

  componentDidMount() {
    fetch('/api/get_controllers')
      .then(res => res.json())
      .then(controllers => this.setState({ controllers }));
  }

  render() {
    // const controllers = [{ name: 'app', pods: Array.from(Array(50).keys()) }, { name: 'journey-service', pods: Array.from(Array(5).keys()) },
    //   { name: 'ingestor-service', pods: Array.from(Array(10).keys()) }, { name: 'delivery-service', pods: Array.from(Array(5).keys()) },
    //   { name: 'config-service', pods: Array.from(Array(7).keys()) }, { name: 'react-dashboard', pods: Array.from(Array(5).keys()) }];
    // const { username } = this.state;
    return (<Village controllers={this.state.controllers} />);
  }
}
