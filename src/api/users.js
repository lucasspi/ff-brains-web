import { db } from 'helpers/Firebase';

const storeUserInformationsAsync = async (uid, values) =>
  db
    .collection('users')
    .doc(uid)
    .set(values)
    .then((user) => user)
    .catch((error) => error);

export { storeUserInformationsAsync };
