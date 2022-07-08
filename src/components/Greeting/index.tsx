import React from 'react';

import { Typography } from 'antd';
import { DATA } from '../../data';

import './index.scss';

const { Title, Text } = Typography;

export const Greeting: React.FC = () => {
  return (
    <div className='greeting'>
      <Title level={1}>
        <Text type='secondary'>{DATA.greeting.title}</Text>
      </Title>
      <Title level={4}>
        <Text type='secondary'>{DATA.greeting.subTitle}</Text>
      </Title>
    </div>
  );
};
