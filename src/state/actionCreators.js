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

export function inputChange(name, value) {
  return {
    type: types.INPUT_CHANGE,
    payload: {
      name,
      value,
    },
  };
}


// mark // needs args
// submit
