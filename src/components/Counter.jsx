import React, { useReducer } from 'react';

const initialCount = 0;

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

function reducer(count, action) {
  switch (action.type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return count - 1;
    case RESET:
      return 0;
    default:
      return count;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialCount);

  const increment = () => dispatch({ type: INCREMENT });
  const decrement = () => dispatch({ type: DECREMENT });

  return (
    <div className='component'>
      The count is {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
