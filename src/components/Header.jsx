import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import { NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions'


function Header() {
  
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout)
  }

  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container fluid>
            <LinkContainer to='/'>
             <Navbar.Brand >Shop</Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to='/cart'>
              <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>

            {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                      <NavDropdown.Item>
                          Profile
                      </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                          LogOut
                  </NavDropdown.Item>
                </NavDropdown>
            ): (
              <LinkContainer to='/login'>
                <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
              </LinkContainer>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminmenu'>
              <LinkContainer to='/admin/userlist'>
                  <NavDropdown.Item>
                      Users
                  </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/productlist'>
                  <NavDropdown.Item>
                      Products
                  </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/orderlist'>
                  <NavDropdown.Item>
                      Orders
                  </NavDropdown.Item>
              </LinkContainer>
              </NavDropdown>
            )}

            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header