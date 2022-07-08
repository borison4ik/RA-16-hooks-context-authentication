import React from 'react';
import { Layout, Typography } from 'antd';

import { Logo } from './components/Logo';
import { UserProfile } from './components/UserProfile';
import { PageContent } from './components/PageContent';
import { AuthProvider } from './components/AuthProvider';

import { DATA } from './data';
import './app.scss';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Header className='app-header'>
          <Title level={4}>
            <Text type='secondary'>{DATA.task.title}</Text>
          </Title>
        </Header>
        <div className='auth-header'>
          <Logo />
          <UserProfile />
        </div>
        <Content className='app-content'>
          <PageContent />
        </Content>
      </Layout>
    </AuthProvider>
  );
}

export default App;
