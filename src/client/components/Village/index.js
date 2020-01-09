import React, { Component } from 'react';
import Masonry from 'masonry-layout';
import CowFarm from '../CowFarm';
import './Village.css';

class Village extends Component {
  state = { farms: [] };

  componentDidMount() {
    fetch('/api/fetch-farms')
      .then(res => res.json())
      .then(farms => {
        this.setState({ farms });

        if (this.masonry && this.state.farms) {
          this.masonry.destroy();
          this.masonry = new Masonry('.village', { // eslint-disable-line no-new
            itemSelector: '.cow-farm',
            columnWidth: 50
          });
        } else if (this.state.farms) {
          this.masonry = new Masonry('.village', { // eslint-disable-line no-new
            itemSelector: '.cow-farm',
            columnWidth: 50
          });
        }
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
