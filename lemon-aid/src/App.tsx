import { useState } from 'react';
import { Layout, Card, Button, Spin } from 'antd';
import { Advice } from './Advice';
import { fetchAdvice } from './AdviceApi';

const { Header, Content } = Layout;

function App() {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Layout className="layout">
    <Header>
    </Header>
    <div className="App">
      <header className="App-header">
        </header>
    </div>
  </Layout>
}

export default App
