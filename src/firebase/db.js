import { db } from './firebase';

export const createTinputRecord = (tinput) => {
  return db.ref().child('tinputs').push({ tinput: tinput });
}
