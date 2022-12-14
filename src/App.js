import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import OrderListScreen from './screens/OrderListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact></Route>
            <Route path='/?keyword' element={<HomeScreen/>}></Route>
            <Route path='/product/:id' element={<ProductScreen/>}></Route>
            <Route path='/cart/:id' element={<CartScreen/>}></Route>
            <Route path='/cart' element={<CartScreen/>}></Route>
            <Route path='/login' element={<LoginScreen/>}></Route>
            <Route path='/register' element={<RegisterScreen/>}></Route>
            <Route path='/profile' element={<ProfileScreen/>}></Route>
            <Route path='/shipping' element={<ShippingScreen/>}></Route>
            <Route path='/payment' element={<PaymentScreen/>}></Route>
            <Route path='/placeorder' element={<PlaceOrderScreen/>}></Route>
            <Route path='/order/:id' element={<OrderScreen/>}></Route>
            <Route path='/admin/userlist' element={<UserListScreen/>}></Route>
            <Route path='/admin/user/:id/edit' element={<UserEditScreen/>}></Route>
            <Route path='/admin/productlist' element={<ProductListScreen/>}></Route>
            <Route path='/admin/orderlist' element={<OrderListScreen/>}></Route>
            <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>}></Route>
          </Routes>
        </Container>
      </main>
      <Footer /> 
    </>
  );
}

export default App;
