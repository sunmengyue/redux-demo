export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user /*match login dispatch*/ };
    default:
      return state;
  }
};

export default reducer;
