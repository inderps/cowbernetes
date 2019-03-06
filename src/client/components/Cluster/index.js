import React, { Component } from 'react';
import Pod from './../Pod';
import './Cluster.css';

const Cluster = ({ pods }) => {
  return (<div className='cluster'>
    {
      pods.map(pod => (<Pod key={pod} pod={pod} />))
    }
  </div>)
}

export default Cluster
