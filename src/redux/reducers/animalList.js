const animalList = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ANIMAL':
        return  action.payload
      default:
        return state;
    }
  };

  export default animalList;