import { Dropdown, Space } from 'antd';
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import supabase from 'lib/supabaseClient';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { St } from './LoginUtilStyle';

const LoginUtil = ({ currentUser }) => {
  const navigate = useNavigate();

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const items = [
    {
      key: '1',
      label: <Link to={'/mypage'}>마이페이지</Link>,
      icon: <UserOutlined />
    },
    {
      key: '2',
      label: <Link onClick={signOut}>로그아웃</Link>,
      icon: <LogoutOutlined />
    }
  ];

  return (
    <div>
      <Dropdown
        menu={{
          items
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <St.UtilBox>
              <St.ProfileMini>
                <img src={currentUser?.profileImg} alt="프로필 사진" />
              </St.ProfileMini>
              <St.UserName>{currentUser?.nickname}</St.UserName>
              <small>님</small>
            </St.UtilBox>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default LoginUtil;
