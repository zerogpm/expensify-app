import * as actionType from './actionType';

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case actionType.ADD_EXPENSE:
      return [...state, action.expense];
    case actionType.REMOVE_EXPENSE:
      return state.filter(item => item.id !== action.id);
    case actionType.EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;