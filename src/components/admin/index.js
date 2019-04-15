import React from 'react';
import withAuthorization from '../session/withAuthorization';

const Admin = () => {
  return (
    <h1>Admin</h1>
  )
}

const condition = authUser =>
  authUser && !authUser.isAnonymous;
export default withAuthorization(condition)(Admin);
