import React from 'react';
import AuthUserContext from './context';
import { firebase, auth } from '../../firebase';
import { withRouter } from 'react-router-dom';

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authUser) {
          auth.signInAnonymously()
          .catch(error => console.log(error))
        }
        if (!condition(authUser)) {
          this.props.history.push('/');
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
  return withRouter(WithAuthorization);
}
export default withAuthorization;
