import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'masonry-layout';
import SheepFarm from '../SheepFarm';
import './Cluster.css';

class Cluster extends Component {
  static propTypes = {
    controllers: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  componentDidMount() {
    new Masonry('.village', { // eslint-disable-line no-new
      itemSelector: '.sheep-farm',
      columnWidth: 50
    });
  }

  render() {
    const { controllers } = this.props;

    return (
      <div className="village">
        {
        controllers.map(controller => (
          <SheepFarm key={controller.name} controller={controller} />
        ))
      }
      </div>
    );
  }
}

export default Cluster;
