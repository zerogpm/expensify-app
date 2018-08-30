import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Add Expense
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//remove Expense
const removeExpense = (
  {
    id
  } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//edit Expense
const editExpense = (
  id,
  updates
) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//set text filter
const setTextFilter = (
  text = ''
) => ({
  type: 'SET_TEXT_FILTER',
  text
});

//set sort by amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  amount: 'amount'
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  date: 'date'
});

//Set StartDate
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

//Set End Date
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

//Expenses Reducer
const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: undefined,
  endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(item => item.id !== action.id);
    case 'EDIT_EXPENSE':
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

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.amount
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: action.date
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}));
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300}));
//
// store.dispatch(removeExpense({
//   id: expenseOne.expense.id
// }));
//
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [{
    id: '1',
    description: 'January rent',
    note: 'This was the final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};