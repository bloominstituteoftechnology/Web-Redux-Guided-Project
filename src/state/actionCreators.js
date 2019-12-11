import * as types from './actionTypes';
// action creators here
// STEP 7
export function increment() {
  return {
    type: types.INCREMENT, // we need our types!!!!
  };
}

export function decrement() {
  return {
    type: types.DECREMENT, // we need our types!!!!
  };
}

// inputchange // needs args
// mark // needs args
// submit
