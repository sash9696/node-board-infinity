import { Container, Row, Col } from 'react-bootstrap';
import Account from './Account';
import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <h1>React Authentication</h1>

          <section id='navigation'>
            <a href='/'>Home</a>
            <a href='free'>Free Component</a>
            <a href='/auth'>Auth Component</a>
          </section>
        </Col>
      </Row>
      <Account />
    </Container>
  );
}

export default App;
