import uuid from "uuid";
import * as actionType from '../const/actionType';

//Add Expense
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}) => ({
  type: actionType.ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//Remove Expense
export const removeExpense = (
  { id } = {}) => ({
  type: actionType.REMOVE_EXPENSE,
  id
});

//Edit Expense
export const editExpense = (
  id,
  updates
) => ({
  type: actionType.EDIT_EXPENSE,
  id,
  updates
});

//Set text filter
export const setTextFilter = (
  text = ''
) => ({
  type: actionType.SET_TEXT_FILTER,
  text
});