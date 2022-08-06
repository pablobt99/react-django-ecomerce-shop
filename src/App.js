import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
        <Routes>
          <Route path='/' element={<HomeScreen/>} exact></Route>
          <Route path='/product/:id' element={<ProductScreen/>}></Route>
          <Route path='/cart/:id?' element={<CartScreen/>}></Route>
          </Routes>
        </Container>
      </main>
      <Footer /> 
    </>
  );
}

export default App;
