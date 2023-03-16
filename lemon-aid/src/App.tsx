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
      <Header style={{ height: '140px' }}>
        <h1 style={{ color: 'white', justifyContent: 'center', fontFamily: 'Lobster, cursive', fontSize: '60px', display: 'flex', alignItems: 'center' }}>Lemon Aid</h1>
      </Header>
      <Content className="content">
        <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative', backgroundImage: 'url("https://img.freepik.com/free-photo/white-concrete-wall_53876-92803.jpg?w=2000&t=st=1677567808~exp=1677568408~hmac=4907e57277a600f84c326270013f9820b65b05fba59d5b77ce7e81608374f652")' }}>
          <Card style={{ margin: '0 auto', borderRadius: '15px', width: '500px', height: '300px', textAlign: 'center', fontFamily: 'Crimson Text, serif', fontSize: '20px' }} title="Advice of the Day">
            {advice ? <p>{advice.advice}</p> : <p>No advice yet</p>}
            {loading ? (
              <Spin size="large" tip="Loading..." style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100' }} />
            ) : (
              <Button type="primary" onClick={getNewAdvice} style={{ position: 'absolute', bottom: '10px', right: '10px', marginLeft: '-10px', marginTop: '-10px', backgroundColor: 'darkkhaki', borderColor: 'darkkhaki' }}>
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

