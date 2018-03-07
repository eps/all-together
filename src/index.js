import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './containers/App/App';
import RedditSection from './components/RedditSection/RedditSection';
import ProductHuntSection from './components/ProductHuntSection/ProductHuntSection';
import './index.scss';

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/reddit" component={RedditSection} />
      <Route path="/product-hunt" component={ProductHuntSection} />
    </Switch>
  </Router>
)

ReactDOM.render(router,document.getElementById('root'));
