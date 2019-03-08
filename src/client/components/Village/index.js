import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'masonry-layout';
import CowFarm from '../CowFarm';
import './Village.css';

class Village extends Component {
  static propTypes = {
    controllers: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  componentDidMount() {
    new Masonry('.village', { // eslint-disable-line no-new
      itemSelector: '.cow-farm',
      columnWidth: 50
    });
  }

  render() {
    const { controllers } = this.props;

    return (
      <div className="village">
        {
        controllers.map(controller => (
          <CowFarm key={controller.name} controller={controller} />
        ))
      }
      </div>
    );
  }
}

export default Village;
