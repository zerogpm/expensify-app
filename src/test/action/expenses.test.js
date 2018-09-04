import { addExpense, editExpense, removeExpense, setTextFilter } from '../../actions/expenses';
import * as actionType from '../../const/actionType';
import uuid from "uuid";

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '1234'});
  expect(action).toEqual({
    type: actionType.REMOVE_EXPENSE,
    id: '1234'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('1234', {name: 'chris'});
  expect(action).toEqual({
    type: actionType.EDIT_EXPENSE,
    id: '1234',
    updates: {name: 'chris'}
  });
});

test('should setup set text filter expense action object', () => {
  const action = setTextFilter('Hello there');
  expect(action).toEqual({
    type: actionType.SET_TEXT_FILTER,
    text: 'Hello there'
  });
});

test('should setup add expense action object', () => {
  const expenseData = {
    description: 'water bill',
    note: 'Richmond',
    amount: 200,
    createdAt: ''
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: actionType.ADD_EXPENSE,
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add default expense action object', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: actionType.ADD_EXPENSE,
    expense: {
      description : '',
      note : '',
      amount : 0,
      createdAt : 0,
      id: expect.any(String)
    }
  });
});