import { db } from './firebase';

// -- tinputs api --

// export const createTinputRecord = (tinput, uid) =>
//  db.ref().child('tinputs').push({ tinput: tinput, uid: uid });

export const tinputs = () =>
  db.ref('tinputs');
