import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './components/Todos';
import Counter from './components/Counter';
import Form from './components/Form';

import './App.less';

// const state = {
//   count: 0, // 1
//   form: {   // 2
//     fname: "",
//     lname: "",
//   },
//   todos: [], // 3
// }

// HOW MANY SLICES ARE THERE HERE? 3

ReactDOM.render(<>
  <Counter />
  <Form />
  <Todos />
</>, document.querySelector('#target'));
