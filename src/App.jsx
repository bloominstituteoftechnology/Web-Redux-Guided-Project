import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { countReducer, todosReducer, formReducer } from './state/reducers';
import Todos from './components/Todos';
import Counter from './components/Counter';
import Form from './components/Form';
import './App.less';

// STEP 4 OF THE GENERAL STEPS
const monsterReducer = combineReducers({
  // what keys? One per slice, choosing pretty names
  count: countReducer,
  form: formReducer,
  todos: todosReducer,
});

// STEP 5 OF THE GENERAL STEPS
const store = createStore(monsterReducer);

// STEP 6 OF THE GENERAL STEPS
// wrap the app with the Provider from react-redux lib
ReactDOM.render(<Provider store={store}>
  <Counter />
  <Form />
  <Todos />
</Provider>, document.querySelector('#target'));
