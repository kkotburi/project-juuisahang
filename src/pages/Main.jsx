import React from 'react';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import RecommendDrink from 'components/main/RecommendDrink';
import PopularPosts from 'components/main/PopularPosts';
import { createClient } from '@supabase/supabase-js';

const Main = () => {
  return (
    <div>
      <Header />
      <RecommendDrink />
      <PopularPosts />
      <Footer />
    </div>
  );
};

export default Main;
