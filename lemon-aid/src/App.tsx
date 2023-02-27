import { useState } from 'react';
import { Layout, Card, Button, Spin } from 'antd';
import { Advice } from './Advice';
import { fetchAdvice } from './AdviceApi';

const { Header, Content } = Layout;

function App() {
  const [advice, setAdvice] = useState<Advice | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getNewAdvice = async () => {
    setLoading(true);
    const newAdvice = await fetchAdvice();
    setAdvice(newAdvice);
    setLoading(false);
  };

  return (
    <Layout className="layout">
    <Header>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Lemon Aid</h1>
    </Header>
    <Content className="content">
    <div className="App">
      <Card style={{margin: '0 auto'}}title="Random Advice Generator">
        {advice ? <p>{advice.advice}</p> : <p>No advice yet</p>}
        {loading ? (
          <Spin size="large" tip="Loading..." />
        ) : (
          <Button type="primary" onClick={getNewAdvice}>
            Shoot
          </Button>
        )}
      </Card>
      </div>
    </Content>
  </Layout>
  );
}

export default App;

