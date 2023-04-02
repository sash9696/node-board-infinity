import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Account from './Account';
import './App.css';
import AuthComponent from './AuthComponent';
import FreeComponent from './FreeComponent';
import ProtectedRoutes from './ProtectedRoutes';


function App() {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <h1>React Authentication</h1>

          <section id='navigation'>
            <a href='/'>Home</a>
            <a className='mx-5' href='free'>Free Component</a>
            <a href='/auth'>Auth Component</a>
          </section>
        </Col>
      </Row>
      {/* create routes here */}
      <Routes>
        <Route exact path='/' element={<Account />} />
        <Route exact path='/free' element={<FreeComponent />} />
        {/* <Route exact path='/auth' element={<AuthComponent />} /> */}
        <Route exact path='/auth' element={
          <ProtectedRoutes>
            <AuthComponent />
          </ProtectedRoutes>
        } />

      </Routes>


    </Container>
  );
}

export default App;
