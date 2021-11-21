import React from 'react';

const SearchBox = ({ searchfield, searchChange, reset }) => {
  return (
    <div className='pa2 ma3'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
      <button
        className='hover-bg-dark-red hover-white br3 bg-light-red pa3 ma2'
        title='WARNING: no going back!'
        onClick={reset}>        
        Reset Robot Pictures        
      </button>
    </div>
  );
}

export default SearchBox;