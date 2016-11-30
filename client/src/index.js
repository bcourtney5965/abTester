import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import App from './App';
import Dashboard from './views/dashboard';// don't need "/index.js", since its functions as the default 
import View1 from './views/View1';
import View2 from './views/View2';
import Login from './views/Login';

import All from './views/dashboard/All';
import Mature from './views/dashboard/Mature';
import Premature from './views/dashboard/Premature';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="view1" component={View1}/>
      { /*<Route path="dashboard" component={Dashboard}/> */}
      <Route path="dashboard" component={Dashboard}>
        <Route path="all" component={All}/>
        <Route path="mature" component={Mature}/>
        <Route path="premature" component={Premature}/>
      </Route>
      <Route path="view2" component={View2}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>
), document.getElementById('root'))