import React, { Component } from 'react';
import Masonry from 'masonry-layout';
import io from 'socket.io-client';
import CowFarm from '../CowFarm';
import './Village.css';

class Village extends Component {
  state = { controllers: [] };

  componentDidMount() {
    const socket = io.connect(window.location.host, { reconnect: true });
    socket.on('take-controllers', (controllers) => {
      this.setState({ controllers });

      if (this.masonry && this.state.controllers) {
        this.masonry.destroy();
        this.masonry = new Masonry('.village', { // eslint-disable-line no-new
          itemSelector: '.cow-farm',
          columnWidth: 50
        });
      } else if (this.state.controllers) {
        this.masonry = new Masonry('.village', { // eslint-disable-line no-new
          itemSelector: '.cow-farm',
          columnWidth: 50
        });
      }
    });

    socket.on('connect', () => {
      setInterval(() => {
        socket.emit('give-controllers');
      }, 2000);
    });
  }

  render() {
    const { controllers } = this.state;

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
