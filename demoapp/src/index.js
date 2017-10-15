import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter ,Route , Switch} from 'react-router-dom';
import PostIndex from './components/postIndex';
import PostsNew from './components/post_new';
import reducers from './reducers';
import promise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>
              <Switch>
              <Route path={'/post/new'} component={PostsNew}/>
              <Route path={'/'} component={PostIndex}/>
              </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
