import { all } from 'redux-saga/effects';
import { graphSagas } from './containers/Graph/sagas';

export default function* sagas() {
  yield all([...graphSagas]);
}
