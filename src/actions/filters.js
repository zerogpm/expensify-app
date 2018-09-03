import * as actionType from '../const/actionType';

//set text filter
export const setTextFilter = (
  text = ''
) => ({
  type: actionType.SET_TEXT_FILTER,
  text
});

//set sort by amount
export const sortByAmount = () => ({
  type: actionType.SORT_BY_AMOUNT,
  amount: 'amount'
});

export const sortByDate = () => ({
  type: actionType.SORT_BY_DATE,
  date: 'date'
});

//Set StartDate
export const setStartDate = (startDate = undefined) => ({
  type: actionType.SET_START_DATE,
  startDate
});

//Set End Date
export const setEndDate = (endDate) => ({
  type: actionType.SET_END_DATE,
  endDate
});