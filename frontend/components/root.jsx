import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import App from './app/app';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <Route path="/" component={ App } />
      </HashRouter>
    </Provider>
  )
}

export default Root;
