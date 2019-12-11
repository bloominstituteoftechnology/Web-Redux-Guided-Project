import React from 'react';
import { connect } from 'react-redux';
// STEP 9 OF THE GENERAL STEPS (A)
import { increment, decrement } from '../state/actionCreators';

export function Counter({ count, increment, decrement }) {
  return (
    <div className='component'>
      The count is {count}
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
    </div>
  );
}

// STEP 8 OF THE GENERAL STEPS
export default connect(
  state => state, // mapStateToProps
  { increment, decrement }, // STEP 9 OF THE GENERAL STEPS (B)
)(Counter);
