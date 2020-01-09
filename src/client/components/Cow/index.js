import React from 'react';
import PropTypes from 'prop-types';
import './Cow.css';
import fineCow from './assets/cow.gif';
import deadCow from './assets/dead-cow.png';
import sickCow from './assets/sick-cow.gif';
// https://www.flaticon.com/free-icon/cow_194983
// import Cow from 'svg-react-loader?name=Cow!./assets/cow.svg';

const Cow = ({ cow }) => {
  let cowImage = fineCow;
  let cowClass = 'cow';

  if (cow.status.startsWith('ContainerCreating')) {
    cowClass = `${cowClass} shaking`;
  } else if (cow.status.startsWith('Pending')) {
    cowImage = sickCow;
    cowClass = `${cowClass} shaking`;
  } else if (cow.status.startsWith('Terminating')) {
    cowImage = deadCow;
    cowClass = `${cowClass} shaking`;
  }

  return (<img className={cowClass} src={cowImage} alt="cow" />);
};

Cow.propTypes = {
  cow: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
  }).isRequired
};


export default Cow;
