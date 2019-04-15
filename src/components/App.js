import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withAuthentication from './session/withAuthentication';

import Shell from './shell';
import Admin from './admin';

import "../css/app.css";

const App = ({ authUser }) => {
  return (
    <Router>
      <Route exact path="/admin" component={() => <Admin />} />
      <Route exact path="/" component={() => <Shell authUser={authUser} />} />
    </Router>
  )
}

export default withAuthentication(App);
