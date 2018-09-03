import * as actionType from '../const/actionType';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case actionType.SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };
    case actionType.SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: action.amount
      };
    case actionType.SORT_BY_DATE:
      return {
        ...state,
        sortBy: action.date
      };
    case actionType.SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate
      };
    case actionType.SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

export default filtersReducer;