import React from 'react';
import { Typography } from 'antd';

import { DATA } from '../../data';

const { Text } = Typography;

export const Logo: React.FC = () => {
  return (
    <div className='logo-wrapper'>
      <div className='logo-title'>
        <Text>{DATA.logo.title}</Text>
      </div>
      <div className='logo-subtitle'>
        <Text>{DATA.logo.subTitle}</Text>
      </div>
    </div>
  );
};
