import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';

export const AuthForm: React.FC = () => {
  const [form] = Form.useForm();
  const { onLogin } = useContext(AuthContext);

  const onSubmitHandler = (values: any) => {
    if (values && onLogin) onLogin(values);
    form.resetFields();
  };

  return (
    <Form form={form} name='auth_form' layout='inline' onFinish={onSubmitHandler}>
      <Form.Item name='login' rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
      </Form.Item>
      <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
