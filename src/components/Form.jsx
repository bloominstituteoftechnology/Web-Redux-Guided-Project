import React, { useReducer } from 'react';

const initialState = {
  fname: '',
  lname: '',
};

const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';

function reducer(state, action) {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}

export default function Form() {
  const [formValues, dispatch] = useReducer(reducer, initialState);

  const onValueChange = event => {
    dispatch({
      type: ON_INPUT_CHANGE,
      payload: { name: event.target.name, value: event.target.value },
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    alert(`submitting ${formValues.lname}, ${formValues.fname}`);
  };

  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>first name
        <input value={formValues.fname} onChange={onValueChange} name='fname' />
      </label><br />

      <label>last name
        <input value={formValues.lname} onChange={onValueChange} name='lname' />
      </label><br />

      <input type='submit' />
    </form>
  );
}
