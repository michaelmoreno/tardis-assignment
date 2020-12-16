import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tardis from './Tardis';

const rootProps = {
  name: "Time and Relative Dimension in Space",
  caps: false,
  depth: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <Tardis {...rootProps} />
  </React.StrictMode>,
  document.getElementById('root')
);