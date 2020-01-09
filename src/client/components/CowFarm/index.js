import React from 'react';
import PropTypes from 'prop-types';
import Cow from '../Cow';
import './CowFarm.css';
import houseImage from './assets/house.png';

const CowFarm = ({ farm }) => (
  <div className="cow-farm">
    <div className="billboard">{farm.name}</div>
    <img src={houseImage} className="house" alt="house" />
    <div className="farm">
      {
        farm.cows.map(cow => (<Cow key={cow.name} cow={cow} />))
      }
    </div>
    <div className="customTag">v2.0</div>
  </div>
);

CowFarm.propTypes = {
  farm: PropTypes.shape({
    name: PropTypes.string,
    cow: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default CowFarm;
