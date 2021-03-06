import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import App from './containers/App/App';
// import RedditSection from './components/RedditSection/RedditSection';
// import ProductHuntSection from './components/ProductHuntSection/ProductHuntSection';
import store from "./store.js";
import './index.scss';

window.store = store;

const router = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/reddit" component={RedditSection} /> */}
        {/* <Route path="/product-hunt" component={ProductHuntSection} /> */}
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(router,document.getElementById('root'));
