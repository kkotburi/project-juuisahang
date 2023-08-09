import React from 'react';
import Tip from 'components/category/Tip';
import Toast from 'components/category/Toast';
import Game from 'components/category/Game';
import Hangover from 'components/category/Hangover';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { code } = useParams();

  return (
    <div>
      {code === 'a' && <Tip code={code} />}
      {code === 'b' && <Toast code={code} />}
      {code === 'c' && <Game code={code} />}
      {code === 'd' && <Hangover code={code} />}
    </div>
  );
};

export default Category;
