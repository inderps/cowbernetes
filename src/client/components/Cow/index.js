import React from 'react';
import './Cow.css';
import fineCow from './assets/cow.gif';
import deadCow from './assets/dead-cow.png';
import sickCow from './assets/sick-cow.gif';
// https://www.flaticon.com/free-icon/cow_194983
// import Cow from 'svg-react-loader?name=Cow!./assets/cow.svg';

const Cow = ({ pod }) => {
  let cow = fineCow;
  let cowClass = 'cow';

  if (pod.status.startsWith('ContainerCreating')) {
    cowClass = `${cowClass} shaking`;
  } else if (pod.status.startsWith('Pending')) {
    cow = sickCow;
    cowClass = `${cowClass} shaking`;
  } else if (pod.status.startsWith('Terminating')) {
    cow = deadCow;
    cowClass = `${cowClass} shaking`;
  }

  return (<img className={cowClass} src={cow} alt="cow" />);
};

export default Cow;
