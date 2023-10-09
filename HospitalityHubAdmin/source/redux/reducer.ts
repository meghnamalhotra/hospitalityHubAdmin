const initialState = {
  value: 0,
};
export const Reducer = (state = initialState, action: {type: any}) => {
  console.log(state);
  switch (action.type) {
    case 'INCREASE':
      return {...state, value: ++state.value};
    case 'DECREASE':
      return {...state, value: --state.value};
    default:
      return state;
  }
};
