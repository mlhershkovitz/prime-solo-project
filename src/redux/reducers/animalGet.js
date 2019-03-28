const filterAnimals = (state = [], action) => {
    console.log('animalListReducer', action.type)
      switch (action.type) {
        case 'ADD_ANIMAL':
          return  action.payload
        default:
          return state;
      }
    };
  
    export default filterAnimals;