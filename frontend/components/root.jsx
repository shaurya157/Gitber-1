import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import AppContainer from './app/app_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <Route path="/" component={ AppContainer } />
      </HashRouter>
    </Provider>
  )
}

export default Root;
