import React from 'react';
import { connect } from 'react-redux';

export function Counter({ count, increment, decrement }) {
  return (
    <div className='component'>
      The count is {count}
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
    </div>
  );
}

export default connect()(Counter);
