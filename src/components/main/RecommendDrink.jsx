import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import supabase from 'lib/supabaseClient';
import { St } from './MainStyle';

const RecommendDrink = () => {
  const [mood, setMood] = useState();
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const getDrinks = async () => {
      const { data, error } = await supabase.from('drinks').select();

      if (error) {
        console.log(error);
      }

      if (data) {
        setDrinks(data);
      }
    };

    getDrinks();
  }, []);

  const moodDrinks = drinks.filter((item) => item.mood === `${mood}`);
  const recommendDrink = _.sample(moodDrinks);

  const clickMood = (today) => {
    setMood(today);
  };

  const clickAgain = () => {
    setMood(false);
  };

  return (
    <St.RecommendContainer>
      <div>오늘의 나는?</div>
      {mood ? (
        <div>
          <div>{recommendDrink.name}</div>
          <div>{recommendDrink.explanation}</div>
          <button onClick={clickAgain}>다시하기</button>
        </div>
      ) : (
        <St.MoodContainer>
          <div onClick={() => clickMood('즐거움')}>
            <St.MoodImg src="/즐거움.png" />
            <div>즐거움</div>
          </div>
          <div onClick={() => clickMood('화남')}>
            <St.MoodImg src="/화남.png" />
            <div>화남</div>
          </div>
          <div onClick={() => clickMood('설렘')}>
            <St.MoodImg src="/설렘.png" />
            <div>설렘</div>
          </div>
          <div onClick={() => clickMood('뿌듯함')}>
            <St.MoodImg src="/뿌듯함.png" />
            <div>뿌듯함</div>
          </div>

          <div onClick={() => clickMood('외로움')}>
            <St.MoodImg src="/외로움.png" />
            <div>외로움</div>
          </div>
        </St.MoodContainer>
      )}
    </St.RecommendContainer>
  );
};

export default RecommendDrink;
