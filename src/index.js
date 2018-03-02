import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './containers/App/App';
import RedditPanel from './components/RedditPanel/RedditPanel';
import ProductHuntPanel from './components/ProductHuntPanel/ProductHuntPanel';
import './index.scss';

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/reddit" component={RedditPanel} />
      <Route path="/product-hunt" component={ProductHuntPanel} />
    </Switch>
  </Router>
)

ReactDOM.render(router,document.getElementById('root'));
