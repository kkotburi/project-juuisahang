import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getDrinks } from 'api/drinks';
import _ from 'lodash';

const RecommendDrink = () => {
  const [mood, setMood] = useState();

  const { isLoading, isError, data } = useQuery('drinks', getDrinks);

  if (isLoading) {
    return <p>Loading…</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  const drinks = data.data;
  const moodDrinks = drinks.filter((item) => item.mood === `${mood}`);
  const recommendDrink = _.sample(moodDrinks);

  const clickMood = (today) => {
    setMood(today);
  };

  const clickAgain = () => {
    setMood(false);
  };

  return (
    <div>
      <div>오늘의 나는?</div>
      {mood ? (
        <div>
          <div>{recommendDrink.name}</div>
          <div>{recommendDrink.explanation}</div>
          <button onClick={clickAgain}>다시하기</button>
        </div>
      ) : (
        <div>
          <button onClick={() => clickMood('설렘')}>설렘</button>
          <button onClick={() => clickMood('즐거움')}>즐거움</button>
          <button onClick={() => clickMood('뿌듯함')}>뿌듯함</button>
          <button onClick={() => clickMood('화남')}>화남</button>
          <button onClick={() => clickMood('외로움')}>외로움</button>
        </div>
      )}
    </div>
  );
};

export default RecommendDrink;
