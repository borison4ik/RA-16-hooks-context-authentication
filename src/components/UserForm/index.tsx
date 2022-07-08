import { Button, Avatar, Typography, Space } from 'antd';
import React, { useContext, useEffect } from 'react';

import AuthContext from '../../contexts/AuthContext';

const { Text } = Typography;

export const UserForm: React.FC = () => {
  const { token, profile, onLogout, getProfile } = useContext(AuthContext);

  const onLogoutHandler = () => {
    if (onLogout) onLogout();
  };

  useEffect(() => {
    if (getProfile) getProfile(token);
  }, []);

  return (
    <div className='user-profile'>
      <Space size={24}>
        <Text>Hello, {profile && profile.name}!</Text>
        <Avatar src={profile ? profile.avatar : 'https://joeschmoe.io/api/v1/random'} />
        <Button onClick={onLogoutHandler}>Log Out</Button>
      </Space>
    </div>
  );
};
