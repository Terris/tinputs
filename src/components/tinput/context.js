import React from 'react';

const TinputContext = React.createContext(null);

export const withTinput = Component => props => (
  <TinpuContext.Consumer>
    {tinput => <Component {...props} tinput={tinput} />}
  </TinputContext.Consumer>
);

export default TinputContext;
