//set text filter
export const setTextFilter = (
  text = ''
) => ({
  type: 'SET_TEXT_FILTER',
  text
});

//set sort by amount
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  amount: 'amount'
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  date: 'date'
});

//Set StartDate
export const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

//Set End Date
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});