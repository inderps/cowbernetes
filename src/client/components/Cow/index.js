import React from 'react';
import './Cow.css';
import cow from './assets/cow.gif';
import deadCow from './assets/dead-cow.png';
import sickCow from './assets/sick-cow.gif';
// https://www.flaticon.com/free-icon/cow_194983
// import Cow from 'svg-react-loader?name=Cow!./assets/cow.svg';

const Cow = () => (<img className="cow" src={deadCow} alt='cow' />);

export default Cow;
