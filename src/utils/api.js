import database from './database';
import { setState } from '../ducks/root';

const data = database.ref();

export const sendDataToFirebase = state => {
  const jsonState = JSON.parse(JSON.stringify(state));
  return data.set(jsonState);
};

export const loadDataFromFirebase = store => {
  data.on('value', snapshot => {
    store.dispatch(setState(snapshot.val()));
  });
};
