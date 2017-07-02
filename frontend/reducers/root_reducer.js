import { combineReducers } from 'redux';
import ResultReducer from './result_reducer';

const RootReducer = combineReducers({
  searchResult: ResultReducer
});

export default RootReducer;
