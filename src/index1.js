import React from 'react';
import ReactDOM from 'react-dom';
import { Route,BrowserRouter,Switch  } from 'react-router-dom'
import Home from './components/Home';
import Hello from './components/Hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
    <Switch>app
    	<Route exact path="/" component={Home}></Route>
        <Route exact path="/hello/:id" component={Hello}></Route>
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
