import React, { useContext, useEffect } from 'react';
import { notification } from 'antd';

import AuthContext from '../../contexts/AuthContext';
import { AuthForm } from '../AuthForm';
import { UserForm } from '../UserForm';

export const UserProfile: React.FC = () => {
  const { token, authError } = useContext(AuthContext);

  useEffect(() => {
    if (!!!authError) return;

    notification.open({
      message: authError,
    });
  }, [authError]);

  return <>{token ? <UserForm /> : <AuthForm />}</>;
};
