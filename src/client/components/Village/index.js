import React, { Component } from 'react';
import CowFarm from '../CowFarm';
import './Village.css';

class Village extends Component {
  state = { farms: [] };

  componentDidMount() {
    setInterval(() => {
      fetch('/api/fetch-farms')
        .then(res => res.json())
        .then((farmsResponse) => {
          this.setState({ farms: farmsResponse });
        });
    }, 3000);
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
