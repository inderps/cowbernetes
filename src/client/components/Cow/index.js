import React from 'react';
import './Cow.css';
import fineCow from './assets/cow.gif';
import deadCow from './assets/dead-cow.png';
import sickCow from './assets/sick-cow.gif';
// https://www.flaticon.com/free-icon/cow_194983
// import Cow from 'svg-react-loader?name=Cow!./assets/cow.svg';

const Cow = ({ pod }) => {
  let cow = deadCow; let
    cowClass = 'cow shaking';

  switch (pod.status) {
    case 'Running':
      cow = sickCow;
      break;
    case 'ContainerCreating':
      cowClass = `${cowClass} shaking`;
      break;
    case 'Terminating':
      cow = deadCow;
      cowClass = `${cowClass} shaking`;
      break;
  }

  console.log(pod);
  return (<img className={cowClass} src={cow} alt="cow" />);
};

export default Cow;
