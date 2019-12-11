import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { countReducer, todosReducer, formReducer } from './state/reducers';
import Todos from './components/Todos';
import Counter from './components/Counter';
import Form from './components/Form';
import './App.less';

const monsterReducer = combineReducers({
  // what keys? One per slice, choosing pretty names
  count: countReducer,
  form: formReducer,
  todos: todosReducer,
});


ReactDOM.render(<>
  <Counter />
  <Form />
  <Todos />
</>, document.querySelector('#target'));
