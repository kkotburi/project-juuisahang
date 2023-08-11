import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import supabase from 'lib/supabaseClient';
import { styled } from 'styled-components';

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
    <RecommendContainer>
      <div>오늘의 나는?</div>
      {mood ? (
        <div>
          <div>{recommendDrink.name}</div>
          <div>{recommendDrink.explanation}</div>
          <button onClick={clickAgain}>다시하기</button>
        </div>
      ) : (
        <MoodContainer>
          <div onClick={() => clickMood('즐거움')}>
            <MoodImg src="/즐거움.png" />
            <div>즐거움</div>
          </div>
          <div onClick={() => clickMood('화남')}>
            <MoodImg src="/화남.png" />
            <div>화남</div>
          </div>
          <div onClick={() => clickMood('설렘')}>
            <MoodImg src="/설렘.jpg" />
            <div>설렘</div>
          </div>
          <div onClick={() => clickMood('뿌듯함')}>
            <MoodImg src="/뿌듯함.jpg" />
            <div>뿌듯함</div>
          </div>

          <div onClick={() => clickMood('외로움')}>
            <MoodImg src="/외로움.jpg" />
            <div>외로움</div>
          </div>
        </MoodContainer>
      )}
    </RecommendContainer>
  );
};

export default RecommendDrink;

const RecommendContainer = styled.div`
  width: 1200px;
  height: 400px;

  margin: 100px 0px;
  background-color: white;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MoodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoodImg = styled.img`
  width: 200px;
  height: auto;
`;
