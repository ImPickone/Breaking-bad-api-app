import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const currentText = e.target.value;
    setText(currentText);
    getQuery(currentText);
  };

  return (
    <section className='search'>
      <form>
        <input
          onChange={handleChange}
          value={text}
          type='text'
          className='form-control'
          placeholder='Search characters...'
          autoFocus='on'
        ></input>
      </form>
    </section>
  );
};

export default Search;
