// Very clustered code. Would not do this IRL but for time purposes, need to

import {
  receiveUser,
  receiveOrganization,
  receiveRepo,
  receiveUserRepos,

  REQUEST_USER,
  REQUEST_ORGANIZATION,
  REQUEST_REPO,
  REQUEST_USER_REPOS
} from '../actions/search_actions';

import {
  searchUser,
  getUserRepos,
  getRepoInfo,
  searchOrganization
} from '../util/github_api_util';

const SearchMiddleware = ({dispatch}) => next => action => {
  const receiveUserSuccess = (data) => dispatch(receiveUser(data));
  const receiveOrgSuccess = (data) => dispatch(receiveOrganization(data));
  const receiveUserReposSuccess = (data) = dispatch(receiveUserRepos(data));
  const error = (data) => console.log(data);

  switch (action.type) {
    case REQUEST_USER:
      searchUser(action.user, receiveUserSuccess, error);
      return next(action);
    case REQUEST_ORGANIZATION:
      searchOrganization(action.organization, receiveOrgSuccess, error);
      return next(action);
    case REQUEST_USER_REPOS:
      getUserRepos(action.user, receiveUserReposSuccess, error);
      return next(action);
    default:
      return next(action);
  }
}

export default SearchMiddleware;
