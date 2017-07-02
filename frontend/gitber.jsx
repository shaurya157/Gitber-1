import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
// import {searchUser, getUserRepos, getRepoInfo} from './util/github_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store;
  if(window.currentUser){
    store = configureStore({session: {currentUser: window.currentUser}})
  } else {
    store = configureStore();
  }

// debugging purposes
  // window.store = store;
  // window.success = (data) => console.log(data);
  // window.error = data => console.log(data);
  // window.getUserRepos = getUserRepos;
  // window.searchUser = searchUser;
  // window.getRepoInfo = getRepoInfo;
  // window.ask = ask;
  ReactDOM.render(<Root store={store} />, rootEl);
});
