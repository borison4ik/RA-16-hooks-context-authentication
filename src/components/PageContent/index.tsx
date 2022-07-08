import React, { useContext } from 'react';
import { Row, Col } from 'antd';

import { Greeting } from '../Greeting';
import { News } from '../News';
import AuthContext from '../../contexts/AuthContext';

import './index.scss';

export const PageContent: React.FC = () => {
  const { token } = useContext(AuthContext);
  console.log(token);
  return (
    <Row className='page-content'>
      <Col span={24}>{token ? <News /> : <Greeting />}</Col>
    </Row>
  );
};
