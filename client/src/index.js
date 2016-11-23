import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import App from './App';
import Dashboard from './components/Dashboard';
import View1 from './components/View1';
import View2 from './components/View2';
import Login from './components/Login';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="view1" component={View1}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="view2" component={View2}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>
), document.getElementById('root'))