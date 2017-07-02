import { RECEIVE_ORGANIZATION,
         RECEIVE_USER,
         RECEIVE_USER_REPOS} from '../actions/search_actions';
import merge from 'lodash/merge'

const _defaultState = {
  user: {
    name: "",
    username: "",
    avatar_url: "",
    url: "",
    created_at: "",
    hireable: false
  },
  organization: [],
  repos: []
};

const ResultReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type){
    case RECEIVE_ORGANIZATION:
      action.organization.forEach((member) => {
        let org_member = {
          username: member.login,
          url: member.url
        }

        newState.organization.push(org_member);
      })

      return newState;
    case RECEIVE_USER:
      newState.user.name = action.user.name
      newState.user.username = action.user.login
      newState.user.avatar_url = action.user.avatar_url
      newState.user.followers = action.user.followers
      newState.user.url = action.user.url
      newState.user.created_at = action.user.created_at
      newState.user.hireable = action.user.hireable
      return newState;
    case RECEIVE_USER_REPOS:
      action.repos.forEach((repo) => {
        let temp_repo = {
          name: repo.name,
          url: repo.url
        }

        newState.repos.push(temp_repo);
      })

      return newState;
    default:
      return oldState;
  }
}

export default ResultReducer;
