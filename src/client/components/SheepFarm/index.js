import React from 'react';
import PropTypes from 'prop-types';
import Pod from '../Pod';
import './SheepFarm.css';

const SheepFarm = ({ controller }) => (
  <div className="sheep-farm">
    <div className="billboard">{controller.name}</div>
    <div className="farm">
      {
        controller.pods.map(pod => (<Pod key={pod} pod={pod} />))
      }
    </div>
  </div>
);

SheepFarm.propTypes = {
  controller: PropTypes.shape({
    name: PropTypes.string,
    pod: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default SheepFarm;
