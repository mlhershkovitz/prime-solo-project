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

function* getAnimal(){
  console.log('GET animal route hit');
  try {
    const response = yield axios.get('/api/animal/dog');
    yield put ({ type: 'ANIMALLL', payload: response.data})
  }
    catch(error) {
      console.log('errors of life:', error);
      
    }
  }
  
  function* deleteMe(action){
    try{
        yield axios.delete( `api/animal/${action.payload}`)
        
        yield put({type: 'GET_ANIMAL'})
    } catch(error){
        console.log('DELETE ', error)
    }
  }

function* projectSaga() {
  yield takeLatest('FETCH_ANIMAL', fetchAnimal);
  yield takeLatest('GET_ANIMAL', getAnimal)
  yield takeLatest('DELETE_ME', deleteMe);
}

export default projectSaga;
