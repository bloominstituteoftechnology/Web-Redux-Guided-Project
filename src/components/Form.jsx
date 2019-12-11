import React from 'react';

export function Form({ fname, lname, inputChange, submit }) {
  const onValueChange = event => {

  };
  const onFormSubmit = event => {

  };

  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>first name
        <input value={fname} onChange={onValueChange} name='fname' />
      </label><br />

      <label>last name
        <input value={lname} onChange={onValueChange} name='lname' />
      </label><br />

      <input type='submit' />
    </form>
  );
}
