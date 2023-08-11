import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const LogoutUtil = () => {
  return (
    <div>
      <Button
        icon={<LoginOutlined />}
        onClick={() => {
          navigate('/login');
        }}
      >
        로그인
      </Button>
    </div>
  );
};

export default LogoutUtil;
