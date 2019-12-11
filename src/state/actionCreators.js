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

// inputchange // needs args
// mark // needs args
// submit
