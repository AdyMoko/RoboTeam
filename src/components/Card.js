import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='hover-bg-light-yellow tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}${Math.random()*3}3?size=300x300`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;