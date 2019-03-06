import React, { Component } from 'react';
import './Pod.css';
// https://www.flaticon.com/free-icon/sheep_194983
import Sheep from 'svg-react-loader?name=Sheep!./assets/sheep.svg';

const Pod = ({ pods }) => {
  return (<div className='pod'>
          <Sheep />
  
  </div>)
}

export default Pod
