import React from 'react';
import PropTypes from 'prop-types';
import Cow from '../Cow';
import './CowFarm.css';
import houseImage from './assets/house.png';

const CowFarm = ({ controller }) => (
  <div className="cow-farm">
    <div className="billboard">{controller.name}</div>
    <img src={houseImage} className="house" alt="house" />
    <div className="farm">
      {
        controller.pods.map(pod => (<Cow key={pod} pod={pod} />))
      }
    </div>
  </div>
);

CowFarm.propTypes = {
  controller: PropTypes.shape({
    name: PropTypes.string,
    pod: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default CowFarm;
