import React from 'react';
import AuthUserContext from './context';
import { firebase, auth } from '../../firebase';

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          // TODO log error a better way.
          auth.signInAnonymously()
          .catch(error => console.log(error))
        }
      });
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => authUser ? <Component {...this.props} authUser={authUser} /> : null}
        </AuthUserContext.Consumer>
      );
    }
  }
  return WithAuthorization;
}
export default withAuthorization;
