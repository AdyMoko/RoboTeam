import React from 'react';
import Card from './Card';

const CardList = ({ robots, randomChars}) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              randomChars={randomChars}
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;