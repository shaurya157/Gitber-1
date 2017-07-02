import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <div>
          WORKIN!
        </div>
      </HashRouter>
    </Provider>
  )
}

export default Root;
