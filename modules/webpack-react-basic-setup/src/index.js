require('babel-runtime/regenerator');
require('babel-register');
// // TODO:
// require('webpack-hot-middleware/client?reload=true');
require('./styles.css');
require('./styles.scss');
require('./styles.sass');

import React from 'react';
import { render } from 'react-dom';
import { App } from './components/app.jsx';

render(
  <App/>,
  document.getElementById('app')
);
