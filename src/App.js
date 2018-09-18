import React, { Component } from 'react';
import Rectangle from './components/Rectangle';
import Circle from './components/Circle';
import Pic from './components/Pic';


const App = () => {

  return (
    <Rectangle>
      <Circle />
      <Pic size={300} />
      <Pic round />
    </Rectangle>
  );
};

export default App;
