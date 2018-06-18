import './app.styl';
import React from 'react';
import { render } from 'react-dom';
import { Link, Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

const App = props => <div className='container'>
  <div>
    <img src={require('./cat.png')}/>
  </div>
  <h1 {...props}>Hey! Оно светится!</h1>
</div>;

const Router = () => <BrowserRouter>
  <div>
    <div className='nav'>
      <Link to='/'>Home</Link>
    </div>
    <Switch>
      {/*
      <Route exact path='/home' component={App}/>
      <Redirect exact path='/' to='/home'/>
      */}
      <Route component={App}/>
    </Switch>
  </div>
</BrowserRouter>;

render(
  <Router/>,
  document.getElementById('app')
);
