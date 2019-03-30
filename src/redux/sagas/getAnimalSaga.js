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

function* filterAnimal(action){
  console.log('get animal route hit');
  try {
    const response = yield axios.post('/api/animal/dog', action.payload);
    yield put ({ type: 'ADD_ANIMAL', payload: response.data})
    console.log('filterssss', response.data);
    
  }
    catch(error) {
      console.log('Error in Filter animal post/get from db ', error);
    }
  }
  
  function* deleteMe(action){
    try{
        yield axios.delete( `api/animal/${action.payload}`)
        yield put({type: 'ADD_ANIMAL'})
    } catch(error){
        console.log('DELETE ', error)
    }
  }

  function* postAnimal(action){
    console.log('post DOG route hit');
    try {
      const response = yield axios.post('/api/animal/add-dog', action.payload);
      console.log('add dog', response.data);
      
    }
      catch(error) {
        console.log('Error in Dog post:', error);
        
      }
    }

    function* postAttribute(action){
      console.log('post attribute route hit');
      try {
        const response = yield axios.post('/api/animal/attribute', action.payload);
        console.log('add attribute', response.data);
      }
        catch(error) {
          console.log('error in INSERT ATTRIBUTE saga', error);
        }
      }

function* projectSaga() {
  yield takeLatest('FETCH_ANIMAL', fetchAnimal);
  yield takeLatest('FILTER_ANIMAL', filterAnimal)
  yield takeLatest('DELETE_ME', deleteMe);
  yield takeLatest('ADD_DOG', postAnimal);
  yield takeLatest('ADD_ATTRIBUTE', postAttribute);
}

export default projectSaga;
