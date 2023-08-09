import { useEffect, useState } from 'react';
import { supabaseClient } from 'lib/supabase/supabase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// page
import Login from 'pages/Login';
import Join from 'pages/Join';
import Main from '../pages/Main';
import Category from 'pages/Category';
import Detail from 'pages/Detail';
import Write from 'pages/Write';
import AuthRoute from './AuthRoute';
import Layout from './Layout';

const Router = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription }
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
  console.log('session => ', session);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/" element={<Main />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail/:postId" element={<Detail />} />
          <Route path="/write" element={<AuthRoute component={<Write />} authenticated={session} />} />
          {/* <Route path="/mypage" element={<MyPage />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
