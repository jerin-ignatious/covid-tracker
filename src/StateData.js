import React from 'react';
import StateMap from './StateMap'

const StateData = ({number}) => {
  return (
    <>
      <h4>Active Cases: {number.Aurangabad.active}</h4>
      <h4>confirmed Cases: {number.Aurangabad.confirmed}</h4>
      <h4>deceased Cases: {number.Aurangabad.deceased}</h4>
      <h4>recovered Cases: {number.Aurangabad.recovered}</h4>
      <StateMap/>
    </>
  );
};

export default StateData;
