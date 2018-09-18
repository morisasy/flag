import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import React from 'react';
import Rectangle from './Rectangle';
import Circle from './Circle';

const App = () => {

  return (
    <Rectangle>
      <Circle />
    </Rectangle>
  );
};

export default App;
