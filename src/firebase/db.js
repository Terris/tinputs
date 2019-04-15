import { db } from './firebase';


// -- user api --
export const isAdmin = (uid) =>
  db.ref('users/' + uid).once('value')
// -- tinputs api --
export const tinputs = () =>
  db.ref('tinputs');

export const getReply = ( command ) =>
  db.ref('commands/' + command + '/reply').once('value')
