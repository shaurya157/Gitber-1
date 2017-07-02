import { RECEIVE_ORGANIZATION, RECEIVE_USER } from '../actions/search_actions';
import merge from 'lodash/merge'

const _defaultState = {
  user: {},
  organization: []
};

const ResultReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type){
    case RECEIVE_ORGANIZATION:
      newState.organization = action.organization;
      return newState
    case RECEIVE_USER:
      newState.user = action.user
    case LOGOUT:
      return _defaultState;
    default:
      return oldState;
  }
}

export default ResultReducer;
