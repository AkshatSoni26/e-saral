const initialState = {};

const reducer = (state = initialState, action) => {
    console.log('ButtonDartReducer')
    console.log('action.data',action.data)
  switch (action.type) {
    case 'data':
      return {
        ...state,
        data: action.data,
       
      };
    default:
      return state; // Return the current state for unknown action types
  }
};

export default reducer;
