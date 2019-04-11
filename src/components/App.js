import React from 'react';
import withAuthentication from './session/withAuthentication';

import Shell from './shell';

import "../css/app.css";

const App = ({ authUser }) => {
  return <Shell authUser={authUser} />
}

export default withAuthentication(App);
