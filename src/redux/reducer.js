import { combineReducers } from 'redux';
import { ADD_USER, DELETE_USER, UPDATE_USER } from './actions';

const initialState = {
  users: [],
};

const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, { ...action.payload, id: state.length + 1 }];
    case DELETE_USER:
      return state.filter(user => user.id !== action.payload);
    case UPDATE_USER:
      return state.map(user => {
        if (user.id === action.payload.userId) {
          return { ...user, ...action.payload.userData };
        }
        return user;
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
