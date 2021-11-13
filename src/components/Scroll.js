import React from 'react';

const Scroll = (props) => {
  return (
    <div 
    style={{ overflowY: 'scroll', border: '2px solid grey', height: '70vh'}}>
      {props.children}
    </div>
  );
};

export default Scroll;