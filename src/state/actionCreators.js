import * as types from './actionTypes';
// STEP 7 OF THE GENERAL STEPS
export function increment() {
  return {
    type: types.INCREMENT,
  };
}

export function decrement() {
  return {
    type: types.DECREMENT,
  };
}

export function submit() {
  return { type: types.SUBMIT };
}

export function inputChange(name, value) {
  return {
    type: types.INPUT_CHANGE,
    payload: {
      name,
      value,
    },
  };
}

export function markTodo(id, completed) {
  return {
    type: types.MARK_TODO,
    payload: { id, completed },
  };
}

// export function addTodo(text) {
//   return {
//     type: types.ADD_TODO,
//     payload: {
//       text,
//       id: Date.now(),
//       completed: false,
//     },
//   };
// }
