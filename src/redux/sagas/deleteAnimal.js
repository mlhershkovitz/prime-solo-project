function* deleteAnimal(action){
    try{
        yield axios.delete( `api/animal/${action.payload}`)
        
        yield put({type: 'DELETE_ME'})
    } catch(error){
        console.log('DELETE ', error)
    }
  }

  function* deleteMeSaga() {
    yield takeLatest('DELETE_ME', deleteAnimal);
  }

  export default deleteMeSaga;