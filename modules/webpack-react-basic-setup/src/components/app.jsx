import './app.styl';
import React from 'react';
import { render } from 'react-dom';

const App = props => <div className='container'>
  <div>
    <img src={require('./cat.png')}/>
  </div>
  <h1 {...props}>Hey! Оно светится!</h1>
</div>;

render(
  <App/>,
  document.getElementById('app')
);
