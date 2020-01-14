import React, { Component } from 'react';
import CowFarm from '../CowFarm';
import './Village.css';

class Village extends Component {
  state = { farms: [] };

  componentDidMount() {
    setInterval(() => {
      this.fetchFarms();
    }, 3000);
    this.fetchFarms();
  }

  fetchFarms() {
    fetch('/api/fetch-farms')
      .then(res => res.json())
      .then((farmsResponse) => {
        this.setState({ farms: farmsResponse });
      });
  }

  render() {
    const { farms } = this.state;

    return (
      <div className="village">
        {
        farms.map(farm => (
          <CowFarm key={farm.fullName} farm={farm} />
        ))
      }
      </div>
    );
  }
}

export default Village;
