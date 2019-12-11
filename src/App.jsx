import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './components/Todos';
import Counter from './components/Counter';
import Form from './components/Form';

import './App.less';

// const state = {
//   count: 2,
//   countSquared: 4, // NOOO
//   constants: [],   // NOOO
//   form: {
//     fname: "",
//     lname: "",
//   },
//   todos: [],
// }

// HOW MANY SLICES ARE THERE HERE? 3

ReactDOM.render(<>
  <Counter />
  <Form />
  <Todos />
</>, document.querySelector('#target'));
