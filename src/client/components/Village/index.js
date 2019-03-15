import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'masonry-layout';
import CowFarm from '../CowFarm';
import './Village.css';
import io from 'socket.io-client';

class Village extends Component {
  static propTypes = {
    controllers: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  componentDidMount() {
    const socket = io.connect(window.location.host, { reconnect: true });
  }

  componentDidUpdate() {
    if (this.masonry && this.props.controllers) {
      this.masonry.destroy();
      this.masonry = new Masonry('.village', { // eslint-disable-line no-new
        itemSelector: '.cow-farm',
        columnWidth: 50
      });
    } else if (this.props.controllers) {
      this.masonry = new Masonry('.village', { // eslint-disable-line no-new
        itemSelector: '.cow-farm',
        columnWidth: 50
      });
    }
  }

  render() {
    const { controllers } = this.props;

    return (
      <div className="village">
        {
        controllers.map(controller => (
          <CowFarm key={controller.fullName} controller={controller} />
        ))
      }
      </div>
    );
  }
}

export default Village;
