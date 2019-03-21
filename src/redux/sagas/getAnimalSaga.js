import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//GET animal Saga: will be fired on "FETCH_ANIMAL" actions
function* fetchAnimal() {
  try {
    const response = yield axios.get('/api/animal');

    yield put({ type: 'ADD_ANIMAL', payload: response.data });
  } catch (error) {
    console.log('Animal get request failed', error);
  }
}

function* getAnimalSaga() {
  yield takeLatest('FETCH_ANIMAL', fetchAnimal);
}

export default getAnimalSaga;
