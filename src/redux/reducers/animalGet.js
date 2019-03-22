const animalls = (state = [], action) => {
    console.log('animalListReducer', action.type)
      switch (action.type) {
        case 'ANIMALLL':
          return  action.payload
        default:
          return state;
      }
    };
  
    export default animalls;