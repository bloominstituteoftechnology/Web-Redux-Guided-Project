import * as types from './actionTypes';

// reducers here
// WE HAVE SETTLED FOR 3 SLICES OF STATE
// THIS MEANS 3 REDUCERS

// REDUCER 1 - count
const initialCount = 0;
export function countReducer(count = initialCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    default:
      return count;
  }
}

// REDUCER 2 - form
const initialForm = { fname: '', lname: '' };
export function formReducer(form = initialForm, action) {
  switch (action.type) {
    default:
      return form;
  }
}

// REDUCER 3 - todos
const initialTodos = [
  { id: '1', name: "sweeping", completed: false },
  { id: '2', name: "mopping", completed: false },
  { id: '3', name: "washing dishes", completed: false },
];
export function todosReducer(todos = initialTodos, action) {
  switch (action.type) {
    default:
      return todos;
  }
}
